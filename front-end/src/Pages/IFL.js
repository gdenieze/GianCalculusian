import { Link } from "react-router-dom"
import formula from "../Components/images/2. Integration of Logarithmic Functions/Formula Logartihmic Functions.png"
import problem1  from "../Components/images/2. Integration of Logarithmic Functions/Logarithmic Function Example 1.png"
import solution1 from  "../Components/images/2. Integration of Logarithmic Functions/Logarithmic Function Solution 1.png"
import problem2  from "../Components/images/2. Integration of Logarithmic Functions/Logarithmic Function Example 2.png"
import solution2 from  "../Components/images/2. Integration of Logarithmic Functions/Logarithmic Function Solution 2.png" 
let topicone = {
        title: "Integration of Logarithmic Functions",
        objective: "Objective: At the end of this lesson, the students should be able to evaluate and apply the integration of logarithmic functions. ",
        definition: "Definition: The integration of log x with base e is equal to xlogx - x + C, where C is the constant integration. The logarithmic function is the inverse of the exponential function. Generally, we write the logarithmic function as logax, where a is the base and x is the index. The integral of ln x can be calculated using the integration by parts formula given by ∫udv = uv - ∫vdu. The integration of log x gives the area under the curve f(x) = log x. Mathematically, we write the integration of log x as ∫log x dx = xlogx - x + C, where ∫ is the integration symbol, dx shows the integral of ln x is with respect to x and C is the integration constant.",
        example: "Examples:"
    } 
    

        


const IFL = ()=>{
    return(
        <>
            <div className="container mt-5">
                <div className="limits-wrapper">
                    <h2>{topicone.title}</h2>
                    <p>{topicone.objective}</p>
                </div>
                <div className="limits-wrapper">
                <p>{topicone.definition}</p>
                <h4>Formula</h4>
                <img src={formula} alt="sample1"/>
                <h4>{topicone.example}</h4>
                <div className="col-4">
                    <img src={problem1} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={solution1} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={problem2} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={solution2} alt="sample1"/>
                </div>
                <div className="limits-wrapper">
                <p>{topicone.note}</p>
            </div>
                </div>
                <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
                </Link>
            </div>
        </>
        )
}

export default IFL