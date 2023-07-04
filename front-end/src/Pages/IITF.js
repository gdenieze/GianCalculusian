import { Link } from "react-router-dom"

import  problem1 from "../Components/images/iit/Inverse2.jpg"
import  solution1 from "../Components/images/iit/Inverse3.jpg"
import  problem2 from "../Components/images/iit/Inverse4.jpg"
import  solution2 from "../Components/images/iit/Inverse5.jpg"
import  problem3 from "../Components/images/iit/Inverse6.jpg"
import  solution3 from "../Components/images/iit/Inverse7.jpg"
import  problem11 from "../Components/images/iit/Inverse8.jpg"





let topicone = {
    title: "Integrals of Inverse Trigonometric Functions",

    

}



const IITF = ()=>{
return(
<>
    <div className="container mt-5">
        <div className="limits-wrapper">
            <h2>{topicone.title}</h2>
        </div>
        <div className="limits-wrapper">
            
           
              
                  
                    <img src={problem1} alt="sample1"/>
                  
                    <img src={solution1} alt="sample1 " className=""/>
                   
               
                
                   
                    <img src={problem2} alt="sample1"  className=""/>
                  
                    <img src={solution2} alt="sample1 " className=""/>
                
                
              
              
                    
                     <img src={problem3} alt="sample1" className="img-fluid"/>
                  
                    <img src={solution3} alt="sample1"/>
                   
  
                     <img src={problem11} alt="sample1" className="img-fluid"/>
                     <div className="limits-wrapper">
                        <p>For further understanding you can watch this videos then yung link</p>
                        <p>Learn more by watching it here... <a href="https://youtu.be/Bgt4zC9L9ew">Part 1</a></p>
                        <p>Watch the second part... <a href="https://youtu.be/e-W21EnrAV8 ">Part 2</a></p>
                        <p>Watch the third part... <a href="https://youtu.be/QWS8J_6eccw">Part 3</a></p>
                    </div>
                
              
               
                
        </div>
                <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
                </Link>
    </div>

</>
)
}

export default IITF