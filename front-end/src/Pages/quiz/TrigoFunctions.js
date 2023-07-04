
import {Link} from "react-router-dom"
import {useState} from "react"
const TrigoFunctions = ()=>{

    const questiontrigonometric = [
        // {  
        //     questionText: './trigo/Q1.png',
        //     answerOptions: [
        //         {imgAns: '/trigo/Q1Answer1.png', isCorrect: false},
        //         {imgAns: '/trigo/Q1Answer2.png', isCorrect: false},
        //         {imgAns: '/trigo/Q1CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/trigo/Q1Answer3.png', isCorrect: false},
        //     ],
        // },
        {  
            questionText: '/trigo/Q2.png',
            answerOptions: [
                {imgAns: '/trigo/Q2Answer1.png', isCorrect: false},
                {imgAns: '/trigo/Q2CorrectAnswer.png', isCorrect: true},
                {imgAns: '/trigo/Q2Answer2.png', isCorrect: false},
                {imgAns: '/trigo/Q2Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/trigo/Q3.png',
            answerOptions: [
                {imgAns: '/trigo/Q3Answer1.png', isCorrect: false},
                {imgAns: '/trigo/Q3CorrectAnswer.png', isCorrect: true},
                {imgAns: '/trigo/Q3Answer2.png', isCorrect: false},
                {imgAns: '/trigo/Q3Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/trigo/Q4.png',
            answerOptions: [
                {imgAns: '/trigo/Q4Answer1.png', isCorrect: false},
                {imgAns: '/trigo/Q4Answer2.png', isCorrect: false},
                {imgAns: '/trigo/Q4Answer3.png', isCorrect: false},
                {imgAns: '/trigo/Q4CorrectAnswer.png', isCorrect: true},
            ],
        },
        // {  
        //     questionText: '/trigo/Q5.png',
        //     answerOptions: [
        //         {imgAns: '/trigo/Q5CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/trigo/Q5Answer1.png', isCorrect: false},
        //         {imgAns: '/trigo/Q5Answer2.png', isCorrect: false},
        //         {imgAns: '/trigo/Q5Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q6.png',
        //     answerOptions: [
        //         {imgAns: '/trigo/Q6Answer1.png', isCorrect: false},
        //         {imgAns: '/trigo/Q6CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/trigo/Q6Answer2.png', isCorrect: false},
        //         {imgAns: '/trigo/Q6Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q7.png',
        //     answerOptions: [
        //         {imgAns: '/trigo/Q7Answer1.png', isCorrect: false},
        //         {imgAns: '/trigo/Q7Answer2.png', isCorrect: false},
        //         {imgAns: '/trigo/Q7Answer3.png', isCorrect: false},
        //         {imgAns: '/trigo/Q7CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        {  
            questionText: '/trigo/Q8.png',
            answerOptions: [
                {imgAns: '/trigo/Q8Answer1.png', isCorrect: false},
                {imgAns: '/trigo/Q8CorrectAnswer.png', isCorrect: true},
                {imgAns: '/trigo/Q8Answer2.png', isCorrect: false},
                {imgAns: '/trigo/Q8Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/trigo/Q9.png',
            answerOptions: [
                {imgAns: '/trigo/Q9CorrectAnswer.png', isCorrect: true},
                {imgAns: '/trigo/Q9Answer1.png', isCorrect: false},
                {imgAns: '/trigo/Q9Answer2.png', isCorrect: false},
                {imgAns: '/trigo/Q9Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/trigo/Q10.png',
            answerOptions: [
                {imgAns: '/trigo/Q10Answer1.png', isCorrect: false},
                {imgAns: '/trigo/Q10Answer2.png', isCorrect: false},
                {imgAns: '/trigo/Q10Answer3.png', isCorrect: false},
                {imgAns: '/trigo/Q10CorrectAnswer.png', isCorrect: true},
            ],
        },
        {  
            questionText: '/trigo/Q11.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: false},
                {imgAns: '/shop-items/Fals.png', isCorrect: true},
            ],
        },
        // {  
        //     questionText: '/trigo/Q12.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q13.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q14.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q15.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q16.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q17.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q18.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q19.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/trigo/Q20.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
    ]
    
    
    
    const [showScore, setshowScore] = useState (false)
    const [currentquestion, setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
     const handleClick =(isCorrect)=>{
        if(isCorrect === true){
            setScore(score + 1)
        }
        const nextQuestion = currentquestion + 1;
        if(nextQuestion < questiontrigonometric.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setshowScore(true)
        }
        
     }
    return (
        <>
            <div className="container text-center mb-5">
               { showScore ? (
               <div className="m-5">
                   <h4> You scored {score} out of {questiontrigonometric.length}</h4>
                   <p>Well done</p>
                    <Link to='/quiz'><button>Return</button></Link>
               </div>) :(
                <div className="quiz-wrapper">
                    <div className="question mt-5 mb-5">
                        <h4>Question {currentquestion + 1}/{questiontrigonometric.length}</h4>
                        <p>Answer the following questions</p>
                        <img src={questiontrigonometric[currentquestion].questionText} alt="question"/>
                    </div>
                    <div className="answers">
                        {questiontrigonometric[currentquestion].answerOptions.map((answerOption)=>(
                            <button className="img-fluid quiz-btn" onClick={()=> handleClick(answerOption.isCorrect)}><img src={answerOption.imgAns} alt='images'/></button>))}
                    </div>
                </div>
               )}
            </div>
        </>
    )
}

export default TrigoFunctions