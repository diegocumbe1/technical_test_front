import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import clienteAxios from '../config/axios';
const ListCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCompanies = async () => {
      const response = await clienteAxios.get('/companies');
      setCompanies(response.data);
    };
    getCompanies();
  }, []);

    const handleButtonClick = (companyId) => {

        navigate(`/inventary/${companyId}`);
      }

  return (
    <>
      <div className="h-screen container mx-auto">
        <h1 className="text-center my-5 font-bold text-3xl">Listado de Empresas</h1>


        <Table striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Nit</th>
              <th>Dirección</th>
              <th>Telefono</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={company.id}>
                <th scope="row">{index + 1}</th>
                <td>{company.name}</td>
                <td>{company.nit}</td>
                <td>{company.address}</td>
                <td>{company.phone}</td>
                <td>
                  <button className='p-2 bg-blue-600 text-center text-white rounded' 
                  onClick={() => handleButtonClick(company._id)}>Ver Productos</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListCompanies;
