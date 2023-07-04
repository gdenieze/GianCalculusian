import { Link } from "react-router-dom"
import  problem1 from "../Components/images/nl/Natural1.jpg"
import  solution1 from  "../Components/images/nl/Natural2.jpg"
import  problem2  from "../Components/images/nl/Natural3.jpg"
import  solution2 from  "../Components/images/nl/Natural4.jpg"
import  problem3  from "../Components/images/nl/Natural5.jpg"
import  solution3 from  "../Components/images/nl/Natural6.jpg"
import  problem4  from "../Components/images/nl/Natural7.jpg"
import  solution4 from  "../Components/images/nl/Natural8.jpg"
import  problem5  from "../Components/images/nl/Natural9.jpg"
import  problem6 from  "../Components/images/nl/Natural10.jpg"
import  problem7 from  "../Components/images/nl/Natural11.jpg"



    let topicone = {
        title: "Integrals Leading to Natural Logarithms",
        
    }



const ILNL = ()=>{
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
                        <img src={problem2} alt="sample3"/>
                    </div>
                    <div>
                        <img src={solution2} alt="sample2"/>
                    </div>
                    <div>
                        <img src={problem3} alt="sample3"/>
                    </div>
                    <div>
                        <img src={solution3} alt="sample2"/>
                    </div>
                    <div>
                        <img src={problem4} alt="sample3"/>
                    </div>
                    <div>
                        <img src={solution4} alt="sample2"/>
                    </div>
                    <div>
                        <img src={problem5} alt="sample3"/>
                    </div>
                    <div>
                        <img src={problem6} alt="sample2"/>
                    </div>

                    <div>
                        <img src={problem7} alt="sample3"/>
                    </div>
                    <div className="limits-wrapper">
                    <h4>Note:</h4>
                        </div>
                            <div className="limits-wrapper size text-center">
                                <p>{topicone.note}</p>
                                <p>For further understanding you can watch this videos then yung link</p>
                                <p>Learn more by watching it here... <a href="https://youtu.be/K3IoM2iVSe4 ">Part 1</a></p>
                                <p>Watch the second part... <a href="https://youtu.be/LdjumZxwmjU ">Part 2</a></p>
                            </div>
                  
                        </div>
           
            <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
                </Link>
        </div>
    </>
    )
}

export default ILNL