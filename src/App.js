import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
