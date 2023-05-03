import React, { useState, useEffect }  from 'react'
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Alerta from "./Alerta";

import { ToastContainer, toast } from 'react-toastify';
import clienteAxios from '../config/axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inventary = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [recipientEmail, setRecipientEmail] = useState('');
    const { companyId } = useParams();
    const [showCompanyName, setShowCompanyName] = useState(false);


    useEffect(() => {
        const getProducts = async () => {
        const route = companyId == 0 ?'/products' : `/products/${companyId}`
        const response = await clienteAxios.get(route);
        setProducts(response.data);
        };
        if(companyId != 0){
          setShowCompanyName(true);
        } 
        getProducts();
    }, []);





    const handleDownloadPdfClick = async () => {
        try {
          const route = companyId == 0 ?'/download-pdf' : `/download-pdf/${companyId}`
          const response = await clienteAxios.get(route, {
            responseType: 'blob', // Indica que la respuesta es un archivo
          });
          console.log('response',response)
      
          // Crea una URL a partir del blob del PDF
          const url = window.URL.createObjectURL(new Blob([response.data]));
      
          // Crea un enlace temporal para descargar el PDF
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'list-companies.pdf');
          document.body.appendChild(link);
          link.onload = () => {
            // Mostrar la alerta de descarga completa
            window.URL.revokeObjectURL(url);
            alert('Descarga completada');
            toast.success('El PDF ha sido descargado correctamente.');
          };
          link.click();
          
        } catch (error) {
          console.error(error);
        }
      }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
      };
    
      const handleRecipientEmailChange = (event) => {
        setRecipientEmail(event.target.value);
      };
    
      const handleSendEmailClick = async() => {
        // Aquí puedes agregar la lógica para enviar un correo electrónico
        console.log(`Enviando correo electrónico a ${recipientEmail}...`);
        // Cerrar el modal
        try {
             await clienteAxios.get(`/send-email/${recipientEmail}`);
             console.log('response',response)
             toast.success(`pdf enviado al correo: ${recipientEmail}`);
             return (
                <div className="p-10">
                  <ToastContainer />
                  {/* ... */}
                </div>
              );
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                toast.error(`Error al eviar correo: ${errorMessage}`);
              } else {
            setAlerta({
                msg: 'Error',
                error:true
            })
        }
        }
        toggleModal();
      };

    return (
    <>
        <div className="h-screen container mx-auto">        
            <h1 className='text-center my-5 font-bold text-3xl'>Inventario</h1>

            <div className="flex justify-center mb-5">
                <button className="p-2 mr-2 bg-indigo-600 text-center text-white rounded" onClick={handleDownloadPdfClick}>
                    Descargar PDF
                </button>
                <button className="p-2 bg-indigo-600 text-center text-white rounded" onClick={toggleModal}>
                    Enviar por Correo
                </button>
            </div>
           
            

            <Table striped responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    {!showCompanyName && <th>Empresa</th>}
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>

                    </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
                    products.map((company, index) => (
                    <tr key={company.id}>
                        <th scope="row">{index + 1}</th>
                        {!showCompanyName && <td>{company.company.name} </td>}
                        <td>{company.name}</td>
                        <td>{company.stock}</td>
                        <td>{company.price}</td>

                    </tr>
                    ))
                  ): (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No hay productos disponibles
                      </td>
                    </tr>
                  )}
                </tbody>
            </Table>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Enviar por Correo</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="recipientEmail">Correo electrónico del destinatario:</label>
              <input
                type="email"
                className="form-control"
                id="recipientEmail"
                value={recipientEmail}
                onChange={handleRecipientEmailChange}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSendEmailClick}>
              Enviar
            </Button>{' '}
            <Button color="secondary" onClick={toggleModal}>
              Cancelar
            </Button>
          </ModalFooter>
          </Modal>
        </div>
        <ToastContainer />
    </>
    )
}
export default Inventary;