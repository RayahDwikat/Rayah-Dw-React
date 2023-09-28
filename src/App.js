
import './App.css';
import './index.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {Home} from './pages/Home';
import { Details } from './pages/Details';
import { MainLayout } from './Layouts/MainLayout';

function App() {
  return (
  <BrowserRouter>
    <Routes> 
    <Route path="/" element={<MainLayout />} >
    <Route index element={<Home />} />
    <Route path="details/:id" element = {<Details />} />                  
    </Route>
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
