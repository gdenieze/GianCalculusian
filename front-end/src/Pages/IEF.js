import { Link } from "react-router-dom"

import problem1 from "../Components/images/expo/Expo1.jpg"
import solution1 from  "../Components/images/expo/Expo2.jpg"
import problem2 from "../Components/images/expo/Expo3.jpg"
import solution2 from  "../Components/images/expo/Expo4.jpg"
import problem3 from "../Components/images/expo/Expo5.jpg"
import solution3 from  "../Components/images/expo/Expo6.jpg"
import problem4 from "../Components/images/expo/Expo7.jpg"
import solution4 from "../Components/images/expo/Expo8.jpg"




let topicone = {
        title: "Integration of Exponential Functions",
       
} 

const IEF = ()=>{
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
                    <img src={solution2} alt="sample4"/>
                </div>
                <div>
                    <img src={problem3} alt="sample5"/>
                </div>
                <div>
                    <img src={solution3} alt="sample6"/>
                </div>

                <div>
                    <img src={problem4} alt="sample7"/>
                </div>
                <div>
                    <img src={solution4} alt="sample8"/>
                </div>
                <div className="limits-wrapper">
                <p>{topicone.note}</p>
                <p>For further understanding you can watch this videos then yung link</p>
                <p>Learn more by watching it here... <a href="https://youtu.be/pNHFv_aere4 ">Part 1</a></p>
                <p>Watch the second part... <a href="https://youtu.be/fJiZUo18xxY ">Part 2</a></p>
            </div>
            </div>
            
            <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
            </Link>
        </div>
    </>
    )
}

export default IEF