import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import Authors from './Pages/Authors/Authors';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Forms/Register';
import Login from './Pages/Forms/Login';
import Cart from './Pages/Cart/Cart';
import Book from './Pages/Book/Book';
import { BookProvider } from './Context/BookContext';

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/authors' element={<Authors/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/book/:id' element={<Book/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </BookProvider>

  );
}

export default App;
