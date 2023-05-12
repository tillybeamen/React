
import './App.css';
import PlanetPage from './views/PlanetPage';
import PeoplePage from './views/PeoplePage';
import HeaderForm from './components/HeaderForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Luke APIWalker</h1>
      <HeaderForm />

      <Routes>
        <Route path="/planets/:id" element={<PlanetPage/>} />
        <Route path="/people/:id" element={<PeoplePage/>} />
      </Routes>
    </div>
  );
}

export default App;
