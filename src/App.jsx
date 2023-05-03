import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './components/Login';

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

            </Route>      
            
            {/* 
              <Route path="/admin" element={<RutaProtegida/>}>

            </Route> */}

            <Route path='menu' element={<Menu/>}/>
            <Route path='/company-form' element={<CompanyForm/>}/>
            <Route path='/product-form' element={<ProductForm/>}/>
            <Route path='/inventary/:companyId' element={<Inventary/>}/>
            <Route path='/list-companies' element={<ListCompanies/>}/>
            
          </Routes>  
        </CompanyProvider>  
      </AuthProvider>
    </BrowserRouter>
  );
}
 
export default App;