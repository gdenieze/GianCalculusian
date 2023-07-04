
import { Link } from "react-router-dom"

import problem1 from "../Components/images/iopr/Power1.jpg"
import solution1 from  "../Components/images/iopr/Power2.jpg"
import problem2 from "../Components/images/iopr/Power3.jpg"
import solution2 from  "../Components/images/iopr/Power4.jpg"
import problem3 from "../Components/images/iopr/Power5.jpg"


let topicone = 
    {
        title: "Integration of Power Rule",
        objective: "At the end of this lesson, the students should be able to derive and apply the power rule of integration.",
        definition: "The power rule of integration is one of the rules of integration and that is used to find the integral (in terms of a variable, say x) of powers of x. To apply the power rule of integration, the exponent of x can be any number (positive, 0, or negative) just other than -1.",
        
        example: "Examples:",
        note: "We cannot integrate ∫ (1/x) dx using the power rule by writing it as ∫ x-1 dx. Because, if we apply the power rule for this, we get x0/0 + C. But x0/0 is not defined. So the power rule of integration cannot be applied just when the exponent is -1. Note that ∫ (1/x) dx = ln x + C.",
    }
        


const Limits = ()=>{
    return(
        <>
            <div className="container mt-5 limit-main-wrapper">
                <div className="limits-wrapper">
                    <h2>{topicone.title}</h2>
                    <p>{topicone.objective}</p>
                    <div className="img-course">
                            <img src={problem1} alt="sample1"/>
                        </div>
                        <div className="img-course">
                            <img src={solution1} alt="sample3"/>
                        </div>
                        <div className="img-course">
                            <img src={problem2} alt="sample2"/>
                        </div>
                        <div className="img-course">
                            <img src={solution2} alt="sample2"/>
                        </div>
                        <div className="img-course">
                            <img src={problem3} alt="sample2"/>
                        </div>
                        <div className="limits-wrapper size">
                            <h4>Note:</h4>
                            <p>{topicone.note}</p>
                            <p>For further understanding you can watch this videos then yung link</p>
                            <p>Learn more by watching it here... <a href="https://youtu.be/RNLEk4ko3mE">Learn more</a></p>
                            
                        </div>
                </div>
               
                <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
                </Link>
            </div>
        </>
        )
}

export default Limits