import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import DashboardPage from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <p >
        <Link style={{textDecoration: "none", color: "blue"}} to="/dashboard">Dashboard </Link>
      </p>

      <Routes>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/products/:id" element={<DetailsPage/>}/>
        <Route path="/products/:id/edit" element={<UpdatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;