import {Link} from "react-router-dom"
import {useState} from "react"


const PowerRule = ()=>{

    const questionpowerrule = [
        // {  
        //     questionText: '/power/Q1.png',
        //     answerOptions: [
        //         {imgAns: '/power/Q1CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/power/Q1Answer1.png', isCorrect: false},
        //         {imgAns: '/power/Q1Answer2.png', isCorrect: false},
        //         {imgAns: '/power/Q1Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q2.png',
        //     answerOptions: [
        //         {imgAns: '/power/Q2Answer1.png', isCorrect: false},
        //         {imgAns: '/power/Q2CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/power/Q2Answer2.png', isCorrect: false},
        //         {imgAns: '/power/Q2Answer3.png', isCorrect: false},
        //     ],
        // },
        {  
            questionText: '/power/Q3.png',
            answerOptions: [
                {imgAns: '/power/Q3Answer1.png', isCorrect: false},
                {imgAns: '/power/Q3CorrectAnswer.png', isCorrect: true},
                {imgAns: '/power/Q3Answer2.png', isCorrect: false},
                {imgAns: '/power/Q3Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/power/Q4.png',
            answerOptions: [
                {imgAns: '/power/Q4Answer1.png', isCorrect: false},
                {imgAns: '/power/Q4Answer2.png', isCorrect: false},
                {imgAns: '/power/Q4Answer3.png', isCorrect: false},
                {imgAns: '/power/Q4CorrectAnswer.png', isCorrect: true},
            ],
        },
        {  
            questionText: '/power/Q5.png',
            answerOptions: [
                {imgAns: '/power/Q5CorrectAnswer.png', isCorrect: true},
                {imgAns: '/power/Q5Answer1.png', isCorrect: false},
                {imgAns: '/power/Q5Answer2.png', isCorrect: false},
                {imgAns: '/power/Q5Answer3.png', isCorrect: false},
            ],
        },
        // {  
        //     questionText: '/power/Q6.png',
        //     answerOptions: [
        //         {imgAns: '/power/Q6Answer1.png', isCorrect: false},
        //         {imgAns: '/power/Q6CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/power/Q6Answer2.png', isCorrect: false},
        //         {imgAns: '/power/Q6Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q7.png',
        //     answerOptions: [
        //         {imgAns: '/power/Q7Answer1.png', isCorrect: false},
        //         {imgAns: '/power/Q7Answer2.png', isCorrect: false},
        //         {imgAns: '/power/Q7Answer3.png', isCorrect: false},
        //         {imgAns: '/power/Q7CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q8.png',
        //     answerOptions: [
        //         {imgAns: '/power/Q8Answer1.png', isCorrect: false},
        //         {imgAns: '/power/Q8CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/power/Q8Answer2.png', isCorrect: false},
        //         {imgAns: '/power/Q8Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q9.png',
        //     answerOptions: [
        //         {imgAns: '/power/Q9CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/power/Q9Answer1.png', isCorrect: false},
        //         {imgAns: '/power/Q9Answer2.png', isCorrect: false},
        //         {imgAns: '/power/Q9Answer3.png', isCorrect: false},
        //     ],
        // },
        {  
            questionText: '/power/Q10.png',
            answerOptions: [
                {imgAns: '/power/Q10Answer1.png', isCorrect: false},
                {imgAns: '/power/Q10Answer2.png', isCorrect: false},
                {imgAns: '/power/Q10Answer3.png', isCorrect: false},
                {imgAns: '/power/Q10CorrectAnswer.png', isCorrect: true},
            ],
        },
        {  
            questionText: '/power/Q11.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: true},
                {imgAns: '/shop-items/Fals.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/power/Q12.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: true},
                {imgAns: '/shop-items/Fals.png', isCorrect: false},
            ],
        },
        // {  
        //     questionText: '/power/Q13.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q14.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q15.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q16.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q17.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q18.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/power/Q19.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        {  
            questionText: '/power/Q20.png',
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
        if(nextQuestion < questionpowerrule.length){
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
                   <h4> You scored {score} out of {questionpowerrule.length}</h4>
                   <p>Well done</p>
                    <Link to='/quiz'><button>Return</button></Link>
               </div>) :(
                <div className="quiz-wrapper">
                    <div className="question mt-5 mb-5">
                        <h4>Question {currentquestion + 1}/{questionpowerrule.length}</h4>
                        <p>Answer the following questions</p>
                        <img src={questionpowerrule[currentquestion].questionText} alt="question"/>
                    </div>
                    <div className="answers">
                        {questionpowerrule[currentquestion].answerOptions.map((answerOption)=>(
                            <button className="img-fluid quiz-btn" onClick={()=> handleClick(answerOption.isCorrect)}><img src={answerOption.imgAns} alt='images'/></button>))}
                    </div>
                </div>
               )}
            </div>
        </>
    )
}

export default PowerRule