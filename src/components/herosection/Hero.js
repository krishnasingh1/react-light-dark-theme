import { useEffect, useState } from "react";

function Hero() {

        

    
        const [hour, setHour] = useState(new Date().getHours());
        const [min, setMin] = useState(new Date().getMinutes());
        const [sec, setSec] = useState(new Date().getSeconds());

        useEffect( ()  =>{

            setTimeout( () => {
                if(hour > 12){
                    setHour(new Date().getHours() - 12);
                }
                setMin(new Date().getMinutes());
                setSec(new Date().getSeconds());
                console.log(hour , min , sec);

            },1000); 
        })


   
    



    return(
        <div className="herosection">
            <div className="time-container">
                Hello {hour >9 ? "" : 0}{hour} : {min >9 ? "" : 0}{min} : {sec >9 ? "" : 0}{sec}
                
            </div>
        </div>
    );
}
export default Hero;