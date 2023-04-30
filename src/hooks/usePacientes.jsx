import {useContext} from 'react';
import PacientesContext from '../context/CompanyProvider';

const usePacientes = () =>{
    return useContext(PacientesContext);
}

export default usePacientes;
