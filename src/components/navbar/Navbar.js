import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";

function Navbar() {

    const [bgColor, setBgColor] = useState("#fff");
    const [tbgColor, setTBgColor] = useState("#282c34");

    const changeColor = () => {

      if(bgColor === "#fff"){
        setBgColor("#282c34")
      }
      else{
        setBgColor("#fff")
      }

    }
    const changeTColor = () => {

        if(tbgColor === "#282c34"){
          setTBgColor("#fff")
        }
        else{
          setTBgColor("#282c34")
        }

        
  
      };

    const handeler = () => {
        changeColor();
        changeTColor();
    };

    return (
        <div className="navbar" style={{backgroundColor: bgColor}}>
            <div className="brand-logo" style={{color: tbgColor}}>
                Hello
            </div>
            <div className="list" >
                <ul>
                <li className="list-item" style={{  }}
                       ><a href="#Blog" style={{ color:bgColor, color:hover=bgColor}} >Home</a></li>
                    <li className="list-item" 
                      ><a href="#Blog" >Blog</a></li>
                    <li className="list-item"  ><a href="#About" >About</a></li>
                    <li className="list-item" ><a href="#Contect" >Contect Us</a></li>
                </ul>
               
            </div>
            <div className="theme">
                <button className="themebtn" onClick={() => { changeColor(); changeTColor();}}  style={{backgroundColor:tbgColor, color: bgColor}}>Theme</button>
            </div>
        </div>
    );
}

export default Navbar;