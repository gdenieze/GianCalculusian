
import {Link} from "react-router-dom"
import {useState} from "react"
const ExponentialFuncs = ()=>{

    const questionexponential = [
        {  
            questionText: 'What is the power rule formula?',
            answerOptions: [
                {imgAns: '/expo/Q1CorrectAnswer.png', isCorrect: true},
                {imgAns: '/expo/Q1Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q1Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q1Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/expo/Q2.png',
            answerOptions: [
                {imgAns: '/expo/Q2Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q2CorrectAnswer.png', isCorrect: true},
                {imgAns: '/expo/Q2Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q2Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/expo/Q3.png',
            answerOptions: [
                {imgAns: '/expo/Q3Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q3CorrectAnswer.png', isCorrect: true},
                {imgAns: '/expo/Q3Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q3Answer3.png', isCorrect: false},
            ],
        },
        { 
            questionText: '/expo/Q4.png',
            answerOptions: [
                {imgAns: '/expo/Q4Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q4Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q4Answer3.png', isCorrect: false},
                {imgAns: '/expo/Q4CorrectAnswer.png', isCorrect: true},
            ],
        },
        {  
            questionText: '/expo/Q5.png',
            answerOptions: [
                {imgAns: '/expo/Q5CorrectAnswer.png', isCorrect: true},
                {imgAns: '/expo/Q5Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q5Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q5Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/expo/Q6.png',
            answerOptions: [
                {imgAns: '/expo/Q6Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q6CorrectAnswer.png', isCorrect: true},
                {imgAns: '/expo/Q6Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q6Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/expo/Q7.png',
            answerOptions: [
                {imgAns: '/expo/Q7Answer1.png', isCorrect: false},
                {imgAns: '/expo/Q7Answer2.png', isCorrect: false},
                {imgAns: '/expo/Q7Answer3.png', isCorrect: false},
                {imgAns: '/expo/Q7CorrectAnswer.png', isCorrect: true},
            ],
        },
        // {  
        //     questionText: '/expo/Q8.png',
        //     answerOptions: [
        //         {imgAns: '/expo/Q8Answer1.png', isCorrect: false},
        //         {imgAns: '/expo/Q8CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/expo/Q8Answer2.png', isCorrect: false},
        //         {imgAns: '/expo/Q8Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q9.png',
        //     answerOptions: [
        //         {imgAns: '/expo/Q9CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/expo/Q9Answer1.png', isCorrect: false},
        //         {imgAns: '/expo/Q9Answer2.png', isCorrect: false},
        //         {imgAns: '/expo/Q9Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q10.png',
        //     answerOptions: [
        //         {imgAns: '/expo/Q10Answer1.png', isCorrect: false},
        //         {imgAns: '/expo/Q10Answer2.png', isCorrect: false},
        //         {imgAns: '/expo/Q10Answer3.png', isCorrect: false},
        //         {imgAns: '/expo/Q10CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q11.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q12.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q13.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q14.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q15.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q16.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q17.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q18.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q19.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/expo/Q20.png',
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
        if(nextQuestion < questionexponential.length){
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
                   <h4> You scored {score} out of {questionexponential.length}</h4>
                   <p>Well done</p>
                    <Link to='/quiz'><button>Return</button></Link>
               </div>) :(
                <div className="quiz-wrapper">
                    <div className="question mt-5 mb-5">
                        <h4>Question {currentquestion + 1}/{questionexponential.length}</h4>
                        <p>Answer the following questions</p>
                    
                        <img src={questionexponential[currentquestion].questionText} alt="question"/>
                    </div>
                    <div className="answers">
                        {questionexponential[currentquestion].answerOptions.map((answerOption)=>(
                            <button className="img-fluid quiz-btn" onClick={()=> handleClick(answerOption.isCorrect)}><img src={answerOption.imgAns} alt='images'/></button>))}
                    </div>
                </div>
               )}
            </div>
        </>
    )
}

export default ExponentialFuncs