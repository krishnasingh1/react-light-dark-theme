import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/herosection/Hero';
import "./components/navbar/navbar.css";
import "./components/herosection/hero.css"
import {useState, createContext } from 'react';

const ThemeContext = createContext(null);

function App() {

  const [bgColor, setBgColor] = useState("");

    const changeColor = () => {

      if(bgColor === "#282c34"){
        setBgColor("#fff")
      }
      else{
        setBgColor("#282c34")
      }

    }
    
  
  return (
    <div className="App">
      
        <Navbar/>
        <Hero/>
      
    </div>
  );
}


export default App;
