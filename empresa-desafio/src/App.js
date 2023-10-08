
import './App.css';
import TelaLogin from './componentes/login/login';
import MeuCampeonato from './componentes/login/MeuCampeonato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadArquivos from './componentes/login/uploadArquivos';
import Artilheiro from './componentes/login/artilheiro';
import RankingJogadores from './componentes/login/rankingJoradores';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/upload' element={<UploadArquivos />} />
        <Route path='/ranking' element={<MeuCampeonato />} />
        <Route path='/artilheiro' element={<Artilheiro />} />
        <Route path='/rankingJogadores' element={<RankingJogadores />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
