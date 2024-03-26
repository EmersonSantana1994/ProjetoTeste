
import './App.css';
import TelaLogin from './componentes/login/login';
import MeuCampeonato from './componentes/login/MeuCampeonato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadArquivos from './componentes/login/uploadArquivos';
import Artilheiro from './componentes/login/artilheiro';
import RankingJogadores from './componentes/login/rankingJoradores';
import Torneio from './componentes/login/torneio';
import Transferencia from './componentes/login/transferencia';
import Healf from './componentes/login/health';
import Netflix from './componentes/login/netflix';
import Cadastro from './componentes/login/cadastro';
import Times from './componentes/login/timesCadastrados';
import Jogadores from './componentes/login/jogadoresCadastrados';

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
        <Route path='/transferencia' element={<Transferencia />} />
        <Route path='/health' element={<Healf />} />
        <Route path='/netflix' element={<Netflix />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/times' element={<Times />} />
        <Route path='/jogadores' element={<Jogadores />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
