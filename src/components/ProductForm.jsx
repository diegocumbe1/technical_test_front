import React, { useState, useEffect } from 'react';
import Alerta from "./Alerta";
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/axios';

const ProductForm = () => {

    const {guardarPassword} = useAuth();

    const [alerta, setAlerta] = useState({});

    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [companyObj, setCompany] = useState({});
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');

    const navigate = useNavigate();   

    useEffect(() => {
        const companyData = localStorage.getItem('companyData');

        const getCompanies = async () => {
          const response = await clienteAxios.get('/companies');
        //   setCompanies(response.data);
        setCompanies(response.data.map(company => ({ id: company._id, name: company.name })));

        };
        // getCompanies();
        console.log('companyDatacompanyData',companyData)
        companyData ==null || Object.keys(companyData).length === 0 && companyData.constructor === Object
        ? getCompanies()
        : setCompany(companyData)

        console.log('companyObj',companyObj)
      }, []);
      


    const handleSubmit = async e =>{
        e.preventDefault();


        try {
            const response = await clienteAxios.post('/product', {
                name, stock, price, company:selectedCompany
            });
            
            toast.success('Producto creado exitosamente.');
            navigate('/inventary/0');

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
                toast.error(`Error al crear el producto: ${errorMessage}`);
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
                        {companyObj.length == 0  ? (
                            <div>
                            <label htmlFor="company" className="font-bold text-gray-600">Empresa</label>
                            <input
                                type="text"
                                id="company"
                                value={companies.find(company => company.id === selectedCompany)?.name}
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                disabled
                            />
                            </div>
                        ) : (
                            <div className="my-3">
                                <label htmlFor="company" className="font-bold text-gray-600">Empresa</label>
                                <select
                                    id="company"
                                    value={selectedCompany}
                                    className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                >
                                    <option value="">Selecciona una Empresa</option>
                                    {companies.map((company) => (
                                    <option key={company.id} value={company.id}>
                                        {company.name}
                                    </option>
                                    
                                    ))}
                                </select>
                            </div>
                         )} 

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
                            <label htmlFor="" className="font-bold text-gray-600">Precio</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="price"
                                placeholder='Price...'
                                onChange={e => setPrice(e.target.value)}
                            />   
                        </div>


                        

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