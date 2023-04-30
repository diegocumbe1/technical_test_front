import {useState} from 'react';
import Alerta from "./Alerta";
import { ToastContainer, toast } from 'react-toastify';

import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/axios';

const ProductForm = () => {

    const {guardarPassword} = useAuth();

    const [alerta, setAlerta] = useState({});

    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    // const [companies, setCompanies] = useState([]);
    // const [selectedCompany, setSelectedCompany] = useState('');


    // useEffect(() => {
    //     const getCompanies = async () => {
    //       const response = await clienteAxios.get('/companies');
    //       setCompanies(response.data);
    //     };
    //     getCompanies();
    //   }, []);
      


    const handleSubmit = async e =>{
        e.preventDefault();

        // navigate('/inventory');

        try {
            const response = await clienteAxios.post('/products', {
                name, stock, price, company
            });
            
            // localStorage.setItem('data', response.data);
            toast.success('Producto creado exitosamente.');
            navigate('/inventory');

            console.log('response', response)
            return (
                <div className="p-10">
                  <ToastContainer />
                  {/* ... */}
                </div>
              );

        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                toast.error(`Error al crear el produco: ${errorMessage}`);
              } else {
            setAlerta({
                msg: 'Error',
                error:true
            })
        }
        }

                    const response = await clienteAxios.post('/companies', {
                name, address, nit, phone
            });
            
            // localStorage.setItem('data', response.data);
            // navigate('/menu');

            console.log('response', response)

    }

    const {msg} = alerta;
    return (
        <>

            <h2 className="font-black text-3xl text-center my-10">Registrar producto</h2>
 
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta}/>}
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div className="my-3">
                            <label htmlFor="" className="font-bold text-gray-600">Nombre</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="name"
                                placeholder='Name...'
                                onChange={e => setName(e.target.value)}
                            />   
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="font-bold text-gray-600">Stock</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="stock"
                                placeholder='Stock...'
                                onChange={e => setStock(e.target.value)}
                            />   
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="font-bold text-gray-600">Price</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="price"
                                placeholder='Price...'
                                onChange={e => setPrice(e.target.value)}
                            />   
                        </div>

                        {/* <div className="my-3">
                            <label htmlFor="" className="font-bold text-gray-600">Company</label> 
                          
                        </div> */}
                        

                        <input 
                            type="submit"
                            value="Guardar"
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg w-full mt-5 cursor-pointer hover:bg-indigo-800" 
                        />

                    </form>
                </div>
            </div>
        </>
    );
}
 
export default ProductForm;