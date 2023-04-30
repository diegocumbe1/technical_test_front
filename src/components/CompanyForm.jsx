import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alerta from "./Alerta";
import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/axios';

const CompanyForm = () => {

    const {guardarPassword} = useAuth();

    const [alerta, setAlerta] = useState({});
    // const [password, setPassword] = useState({
    //     pwd_actual: '',
    //     pwd_nuevo: ''
    // });
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [nit, setNit] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();   

    const handleSubmit = async e =>{
        e.preventDefault();

       

        try {
            const response = await clienteAxios.post('/companies', {
                name, address, nit, phone
            });
            
            localStorage.setItem('data', response.data);
            toast.success('Empresa creada exitosamente.');
            navigate('/list-companies');
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
                toast.error(`Error al crear empresa: ${errorMessage}`);
              } else {
            setAlerta({
                msg: 'Error',
                error:true
            })
        }
        }

            //         const response = await clienteAxios.post('/companies', {
            //     name, address, nit, phone
            // });
            
            // // localStorage.setItem('data', response.data);
            // // navigate('/menu');

            // console.log('response', response)

    }

    const {msg} = alerta;
    return (
        <>
        

            <h2 className="font-black text-3xl text-center my-10">Registrar compañia</h2>
 
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
                            <label htmlFor="" className="font-bold text-gray-600">Dirección</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="address"
                                placeholder='Address...'
                                onChange={e => setAddress(e.target.value)}
                            />   
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="font-bold text-gray-600">Nit</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="nit"
                                placeholder='Nit...'
                                onChange={e => setNit(e.target.value)}
                            />   
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="font-bold text-gray-600">Teléfono</label> 
                            <input 
                                type="text"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="phone"
                                placeholder='Phone...'
                                onChange={e => setPhone(e.target.value)}
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
 
export default CompanyForm;