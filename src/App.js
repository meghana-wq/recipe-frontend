import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddRecipe from './components/AddRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddRecipe/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
