
import {Link} from "react-router-dom"
import {useState} from "react"
const Inverse = ()=>{

    const questioninversetrigo = [
        // {  
        //     questionText: 'The following are the integration formula of inverse trigonometric functions, EXCEPT',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q1Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q1Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q1CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/inverse/Q1Answer3.png', isCorrect: false},
        //     ],
        // },
        {  
            questionText: '/inverse/Q2.png',
            answerOptions: [
                {imgAns: '/inverse/Q2Answer1.png', isCorrect: false},
                {imgAns: '/inverse/Q2CorrectAnswer.png', isCorrect: true},
                {imgAns: '/inverse/Q2Answer2.png', isCorrect: false},
                {imgAns: '/inverse/Q2Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/inverse/Q3.png',
            answerOptions: [
                {imgAns: '/inverse/Q3Answer1.png', isCorrect: false},
                {imgAns: '/inverse/Q3CorrectAnswer.png', isCorrect: true},
                {imgAns: '/inverse/Q3Answer2.png', isCorrect: false},
                {imgAns: '/inverse/Q3Answer3.png', isCorrect: false},
            ],
        },
        // {  
        //     questionText: '/inverse/Q4.png',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q4Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q4Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q4Answer3.png', isCorrect: false},
        //         {imgAns: '/inverse/Q4CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        {  
            questionText: '/inverse/Q5.png',
            answerOptions: [
                {imgAns: '/inverse/Q5CorrectAnswer.png', isCorrect: true},
                {imgAns: '/inverse/Q5Answer1.png', isCorrect: false},
                {imgAns: '/inverse/Q5Answer2.png', isCorrect: false},
                {imgAns: '/inverse/Q5Answer3.png', isCorrect: false},
            ],
        },
        // {  
        //     questionText: '/inverse/Q6.png',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q6Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q6CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/inverse/Q6Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q6Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q7.png',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q7Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q7Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q7Answer3.png', isCorrect: false},
        //         {imgAns: '/inverse/Q7CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q8.png',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q8Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q8CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/inverse/Q8Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q8Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q9.png',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q9CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/inverse/Q9Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q9Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q9Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q10.png',
        //     answerOptions: [
        //         {imgAns: '/inverse/Q10Answer1.png', isCorrect: false},
        //         {imgAns: '/inverse/Q10Answer2.png', isCorrect: false},
        //         {imgAns: '/inverse/Q10Answer3.png', isCorrect: false},
        //         {imgAns: '/inverse/Q10CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q11.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q12.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q13.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q14.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q15.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q16.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q17.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/inverse/Q18.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        {  
            questionText: '/inverse/Q19.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: false},
                {imgAns: '/shop-items/Fals.png', isCorrect: true},
            ],
        },
        {  
            questionText: '/inverse/Q20.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: true},
                {imgAns: '/shop-items/Fals.png', isCorrect: false},
            ],
        },
    ]
    
    
    const [showScore, setshowScore] = useState (false)
    const [currentquestion, setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
     const handleClick =(isCorrect)=>{
        if(isCorrect === true){
            setScore(score + 1)
        }
        const nextQuestion = currentquestion + 1;
        if(nextQuestion < questioninversetrigo.length){
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
                   <h4> You scored {score} out of {questioninversetrigo.length}</h4>
                   <p>Well done</p>
                    <Link to='/quiz'><button>Return</button></Link>
               </div>) :(
                <div className="quiz-wrapper">
                    <div className="question mt-5 mb-5">
                        <h4>Question {currentquestion + 1}/{questioninversetrigo.length}</h4>
                        <p>Answer the following questions</p>
                        <img src={questioninversetrigo[currentquestion].questionText} alt="question"/>
                    </div>
                    <div className="answers">
                        {questioninversetrigo[currentquestion].answerOptions.map((answerOption)=>(
                            <button className="img-fluid quiz-btn" onClick={()=> handleClick(answerOption.isCorrect)}><img src={answerOption.imgAns} alt='images'/></button>))}
                    </div>
                </div>
               )}
            </div>
        </>
    )
}

export default Inverse