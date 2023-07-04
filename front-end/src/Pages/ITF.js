
import { Link } from "react-router-dom"
 import  problem1  from "../Components/images/trigo/Trigo1.jpg"
 import  solution1 from  "../Components/images/trigo/Trigo2.jpg"
 import  problem2  from "../Components/images/trigo/Trigo3.jpg"
 import  solution2 from  "../Components/images/trigo/Trigo4.jpg"
 import  problem11  from "../Components/images/trigo/Trigo5.jpg"
 import  solution11 from  "../Components/images/trigo/Trigo6.jpg"
 import  problem22  from "../Components/images/trigo/Trigo7.jpg"
 import  solution22 from  "../Components/images/trigo/Trigo8.jpg"
import formula from "../Components/images/trigo/Trigo9.jpg"




let topicone = {
        title: "Integrals of Trigonometric Functions",
        
        

}



const ITF = ()=>{
return(
<>
    <div className="container mt-5">
    <div className="limits-wrapper">
                    <h2>{topicone.title}</h2>
                    
                </div>
                <div className="limits-wrapper">
                    
                        <div>
                            <img src={problem1} alt="sample1"/>
                        </div>
                        <div>
                            <img src={solution1} alt="sample2"/>
                        </div>
                        <div>
                            <img src={problem2} alt="sample23"/>
                        </div>
                        <div>
                            <img src={solution2} alt="sample24"/>
                        </div>

                        <div>
                            <img src={problem11} alt="sample15"/>
                        </div>
                        <div>
                            <img src={solution11} alt="sample36"/>
                        </div>
                        <div>
                            <img src={problem22} alt="sample27"/>
                        </div>
                        <div>
                            <img src={solution22} alt="sample28"/>
                        </div>
                        <div>
                            <img src={formula} alt="sample28"/>
                        </div>
                            <p>For further understanding you can watch this videos then yung link</p>
                            <p>Learn more by watching it here... <a href="https://youtu.be/K3IoM2iVSe4 ">Learn more</a></p>
                        </div>
              
              
                
    </div>
                <Link to='/courses'>
                    <div className="container">
                    <button className="btn-next float-end mb-5">Complete</button>
                    </div>
                </Link>
</>
)
}

export default ITF