import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
      <Routes>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/h' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
