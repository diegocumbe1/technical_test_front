import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (

        <div className="h-screen container mx-auto">        
            <h1 className='text-center my-5 font-bold text-3xl'>Menú</h1>

            <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-5">
            
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
                    <img className="w-full h-48 object-cover" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg" alt="Imagen de la card 1"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Crear empresa</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem nec eros lobortis ultricies.</p>
                        <Link 
                            to="/company-form"
                            className='block text-center my-5 bg-indigo-600 rounded text-white p-1'
                        >
                            Crear empresa
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
                    <img className="w-full h-48 object-cover" src="https://cdn.pixabay.com/photo/2016/11/22/19/24/archive-1850170_1280.jpg" alt="Imagen de la card 1"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Crear producto</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem nec eros lobortis ultricies.</p>
                        <Link 
                            to="/product-form"
                            className='block text-center my-5 bg-indigo-600 rounded text-white p-1'
                        >
                            Crear producto
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
                    <img className="w-full h-48 object-cover" src="https://cdn.pixabay.com/photo/2017/03/02/12/14/cardboard-2111107_1280.jpg" alt="Imagen de la card 1"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Listado de empresas</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem nec eros lobortis ultricies.</p>
                        <Link 
                            to="/list-companies"
                            className='block text-center my-5 bg-indigo-600 rounded text-white p-1'
                        >
                            Listado de empresas
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
                    <img className="w-full h-48 object-cover" src="https://cdn.pixabay.com/photo/2015/07/28/22/01/office-865091_1280.jpg" alt="Imagen de la card 1"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Inventario general</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem nec eros lobortis ultricies.</p>
                        <Link 
                            to="/list-companies"
                            className='block text-center my-5 bg-indigo-600 rounded text-white p-1'
                        >
                            Inventario general
                        </Link>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
