import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './components/Login';
import Registrar from './components/Registrar';
import RecuperarPassword from './components/RecuperarPassword';
import ConfirmarCuenta from './components/ConfirmarCuenta';
import NuevoPassword from './components/NuevoPassword';
import AdministrarPacientes from './components/AdministrarPacientes';
import CambiarPassword from './components/CambiarPassword';
import EditarPerfil from './components/EditarPerfil';

import { AuthProvider } from './context/AuthProvider';
import { CompanyProvider } from './context/CompanyProvider';
import { Menu } from './components/Menu';
import CompanyForm from './components/CompanyForm';
import ProductForm from './components/ProductForm';
import Inventary  from './components/Inventary';
import ListCompanies  from './components/companyList';


const App = () => {

  
  return (
    <BrowserRouter>
      <AuthProvider>
        <CompanyProvider>
          <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="registrar" element={<Registrar/>}/>
              <Route path="recuperar-password" element={<RecuperarPassword/>}/>
              <Route path="recuperar-password/:token" element={<NuevoPassword/>}/>
              <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
            </Route>      
            
            {/* 
              <Route path="/admin" element={<RutaProtegida/>}>

            </Route> */}

            <Route path='admin' element={<AdministrarPacientes/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='perfil' element={<EditarPerfil/>}/>
            <Route path='cambiar-password' element={<CambiarPassword/>}/>
            <Route path='/company-form' element={<CompanyForm/>}/>
            <Route path='/product-form' element={<ProductForm/>}/>
            <Route path='/inventary' element={<Inventary/>}/>
            <Route path='/list-companies' element={<ListCompanies/>}/>
            
          </Routes>  
        </CompanyProvider>  
      </AuthProvider>
    </BrowserRouter>
  );
}
 
export default App;