import logo from './logo.svg';
import './App.css';
import TelaLogin from './componentes/login/login';
import MeuCampeonato from './componentes/login/MeuCampeonato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadArquivos from './componentes/login/uploadArquivos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/upload' element={<UploadArquivos />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
