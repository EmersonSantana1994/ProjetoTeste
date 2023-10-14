
import './App.css';
import TelaLogin from './componentes/login/login';
import MeuCampeonato from './componentes/login/MeuCampeonato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadArquivos from './componentes/login/uploadArquivos';
import Artilheiro from './componentes/login/artilheiro';
import RankingJogadores from './componentes/login/rankingJoradores';
import Torneio from './componentes/login/torneio';

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
        <Route path='/torneio' element={<Torneio />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
