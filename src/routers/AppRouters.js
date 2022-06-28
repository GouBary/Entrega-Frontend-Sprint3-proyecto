import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { Pagina1 } from '../components/Pagina1';
import { Pagina2 } from '../components/Pagina2';
import { Pagina3 } from '../components/Pagina3';
import { Pagina4 } from '../components/Pagina4';
import { Login } from '../components/Login';
import Principal2 from '../components/Principal2';
import PaginaVerificacion from '../components/PaginaVerificacion';
import PaginaPrincipal from '../components/PaginaPrincipal';
import AgregarEjercisio from '../components/AgregarEjercisio';
import Search from "../components/Search"


export default function AppRouters() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Pagina1/>}/>
            <Route path="/pag2" element={<Pagina2/>}/>
            <Route path="/pag3" element={<Pagina3/>}/>
            <Route path="/pag4" element={<Pagina4/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Principal2" element={<Principal2/>}/>
            <Route path="/PaginaVerificacion" element={<PaginaVerificacion/>}/>
            <Route path="/PaginaPrincipal" element={<PaginaPrincipal/>}/>
            <Route path="/AgregarEjercisio" element={<AgregarEjercisio/>}/>
            <Route path="/Search" element={<Search/>}/>
         </Routes>
      </BrowserRouter>
  );
}

