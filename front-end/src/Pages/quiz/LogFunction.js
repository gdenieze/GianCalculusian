import {Link} from "react-router-dom"
import {useState} from "react"


const LogFunction = ()=>{

    const questionnaturalloga = [
        {  
            questionText: 'What is the formula Integral Leading to Natural Logarithm?',
            answerOptions: [
                {imgAns: 'Q1 Answer1.png', isCorrect: false},
                {imgAns: 'Q1 Answer2.png', isCorrect: false},
                {imgAns: 'Q1 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q1 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q2.png',
            answerOptions: [
                {imgAns: 'Q2 Answer1.png', isCorrect: false},
                {imgAns: 'Q2 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q2 Answer2.png', isCorrect: false},
                {imgAns: 'Q2 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q3.png',
            answerOptions: [
                {imgAns: 'Q3 Answer1.png', isCorrect: false},
                {imgAns: 'Q3 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q3 Answer2.png', isCorrect: false},
                {imgAns: 'Q3 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q4.png',
            answerOptions: [
                {imgAns: 'Q4 Answer1.png', isCorrect: false},
                {imgAns: 'Q4 Answer2.png', isCorrect: false},
                {imgAns: 'Q4 Answer3.png', isCorrect: false},
                {imgAns: 'Q4 Correct Answer.png', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q5.png',
            answerOptions: [
                {imgAns: 'Q5 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q5 Answer1.png', isCorrect: false},
                {imgAns: 'Q5 Answer2.png', isCorrect: false},
                {imgAns: 'Q5 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q6.png',
            answerOptions: [
                {imgAns: 'Q6 Answer1.png', isCorrect: false},
                {imgAns: 'Q6 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q6 Answer2.png', isCorrect: false},
                {imgAns: 'Q6 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q7.png',
            answerOptions: [
                {imgAns: 'Q7 Answer1.png', isCorrect: false},
                {imgAns: 'Q7 Answer2.png', isCorrect: false},
                {imgAns: 'Q7 Answer3.png', isCorrect: false},
                {imgAns: 'Q7 Correct Answer.png', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q8.png',
            answerOptions: [
                {imgAns: 'Q8 Answer1.png', isCorrect: false},
                {imgAns: 'Q8 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q8 Answer2.png', isCorrect: false},
                {imgAns: 'Q8 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q9.png',
            answerOptions: [
                {imgAns: 'Q9 Correct Answer.png', isCorrect: true},
                {imgAns: 'Q9 Answer1.png', isCorrect: false},
                {imgAns: 'Q9 Answer2.png', isCorrect: false},
                {imgAns: 'Q9 Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q10.png',
            answerOptions: [
                {imgAns: 'Q10 Answer1.png', isCorrect: false},
                {imgAns: 'Q10 Answer2.png', isCorrect: false},
                {imgAns: 'Q10 Answer3.png', isCorrect: false},
                {imgAns: 'Q10 Correct Answer.png', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q11.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: false},
                {imgAns: 'False', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q12.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: false},
                {imgAns: 'False', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q13.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: true},
                {imgAns: 'False', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q14.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: true},
                {imgAns: 'False', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q15.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: false},
                {imgAns: 'False', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q16.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: true},
                {imgAns: 'False', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q17.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: false},
                {imgAns: 'False', isCorrect: true},
            ],
        },
        {  
            questionText: 'Q18.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: true},
                {imgAns: 'False', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q19.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: true},
                {imgAns: 'False', isCorrect: false},
            ],
        },
        {  
            questionText: 'Q20.png',
            answerOptions: [
                {imgAns: 'True', isCorrect: true},
                {imgAns: 'False', isCorrect: false},
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
        if(nextQuestion < questionnaturalloga.length){
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
                   <h4> You scored {score} out of {questionnaturalloga.length}</h4>
                   <p>Well done</p>
                    <Link to='/quiz'><button>Return</button></Link>
               </div>) :(
                <div className="quiz-wrapper">
                    <div className="question mt-5 mb-5">
                        <h4>Question {currentquestion + 1}/{questionnaturalloga.length}</h4>
                        <p>Answer the following questions</p>
                        <img src={questionnaturalloga[currentquestion].questionText} alt="question"/>
                    </div>
                    <div className="answers">
                        {questionnaturalloga[currentquestion].answerOptions.map((answerOption)=>(
                            <button className="img-fluid quiz-btn" onClick={()=> handleClick(answerOption.isCorrect)}><img src={answerOption.imgAns} alt='images'/></button>))}
                    </div>
                </div>
               )}
            </div>
        </>
    )
}

export default LogFunction