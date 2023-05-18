import './App.css';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="container mt-5">
      <h1>Jobs Board</h1>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/jobs/new" element={<CreatePage />} />
        <Route path="/jobs/edit/:id" element={<UpdatePage />} />
        <Route path="/jobs/:id" element={<DetailsPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
        
