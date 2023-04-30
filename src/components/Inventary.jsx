import React from 'react'
import { Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const Inventary = () => {

    return (
    <>
        <div className="h-screen container mx-auto">        
            <h1 className='text-center my-5 font-bold text-3xl'>Inventario</h1>

            <div className='flex justify-center mb-5'>
                <button className='p-2 bg-indigo-600 text-center text-white rounded'>Descargar PDF</button>   
            </div>

            <Table striped responsive>
                <thead>
                    <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Username
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                    </tr>
                </tbody>
            </Table> 

        </div>
    </>
    )
}
export default Inventary;