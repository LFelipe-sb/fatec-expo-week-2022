import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Nav from './Components/Nav';
import CasdastroAluno from './Pages/Cadastro/CadastroAluno/index.jsx';
import CasdastroVisitante from './Pages/Cadastro/CadastroVisitante/index.jsx';
import VisitaPalestra from './Pages/Check/VisitaPalestra';
import Checkout from './Pages/Check/Checkout.jsx';
import Login from './Pages/Login/index.jsx';
import { ProtectedCheckout, ProtectedEvent } from './ProtectedRouter';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro-aluno' element={<CasdastroAluno />} />
          <Route path='/cadastro-visitante' element={<CasdastroVisitante />} />
          <Route element={<ProtectedEvent/>}>
            <Route path='/visita-palestra' element={<VisitaPalestra />} />
          </Route>
          <Route element={<ProtectedCheckout/>}>
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
