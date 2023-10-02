import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {Home} from './pages/Home';
import { Details } from './pages/Details';
import {MainLayout} from './Layouts/MainLayout';

export function App() {
  return ( <>
  <BrowserRouter>
    <Routes> 
    <Route path="/Rayah-Dw-React" element={<MainLayout />} >
    <Route index element={<Home />} />
    <Route path="details/:id" element = {<Details />} />                  
    </Route>
    </Routes>
    
  </BrowserRouter>
  </>
  );
};


