import {Link} from "react-router-dom"
import {useState} from "react"


const LeadNatural = ()=>{

    const questionnaturalloga = [
        // {  
        //     questionText: '/naturalloga/Q1.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/Q1Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q1Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q1CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/naturalloga/Q1Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q2.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/Q2Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q2CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/naturalloga/Q2Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q2Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/natural/loga/Q3.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/Q3Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q3CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/naturalloga/Q3Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q3Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q4.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/Q4Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q4Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q4Answer3.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q4CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q5.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/Q5CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/naturalloga/Q5Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q5Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q5Answer3.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q6.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/Q6Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q6CorrectAnswer.png', isCorrect: true},
        //         {imgAns: '/naturalloga/Q6Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/Q6Answer3.png', isCorrect: false},
        //     ],
        // },
        {  
            questionText: '/naturalloga/Q7.png',
            answerOptions: [
                {imgAns: '/naturalloga/Q7Answer1.png', isCorrect: false},
                {imgAns: '/naturalloga/Q7Answer2.png', isCorrect: false},
                {imgAns: '/naturalloga/Q7Answer3.png', isCorrect: false},
                {imgAns: '/naturalloga/Q7CorrectAnswer.png', isCorrect: true},
            ],
        },
        {  
            questionText: '/naturalloga/Q8.png',
            answerOptions: [
                {imgAns: '/naturalloga/Q8Answer1.png', isCorrect: false},
                {imgAns: '/naturalloga/Q8CorrectAnswer.png', isCorrect: true},
                {imgAns: '/naturalloga/Q8Answer2.png', isCorrect: false},
                {imgAns: '/naturalloga/Q8Answer3.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/naturalloga/Q9.png',
            answerOptions: [
                {imgAns: '/naturalloga/Q9CorrectAnswer.png', isCorrect: true},
                {imgAns: '/naturalloga/Q9Answer1.png', isCorrect: false},
                {imgAns: '/naturalloga/Q9Answer2.png', isCorrect: false},
                {imgAns: '/naturalloga/Q9Answer3.png', isCorrect: false},
            ],
        },
        // {  
        //     questionText: '/naturalloga/Q10.png',
        //     answerOptions: [
        //         {imgAns: '/naturalloga/10Answer1.png', isCorrect: false},
        //         {imgAns: '/naturalloga/10Answer2.png', isCorrect: false},
        //         {imgAns: '/naturalloga/10Answer3.png', isCorrect: false},
        //         {imgAns: '/naturalloga/10CorrectAnswer.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q11.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q12.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q13.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q14.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q15.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q16.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: true},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: false},
        //     ],
        // },
        // {  
        //     questionText: '/naturalloga/Q17.png',
        //     answerOptions: [
        //         {imgAns: '/shop-items/True.png', isCorrect: false},
        //         {imgAns: '/shop-items/Fals.png', isCorrect: true},
        //     ],
        // },
        {  
            questionText: '/naturalloga/Q18.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: true},
                {imgAns: '/shop-items/Fals.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/naturalloga/Q19.png',
            answerOptions: [
                {imgAns: '/shop-items/True.png', isCorrect: true},
                {imgAns: '/shop-items/Fals.png', isCorrect: false},
            ],
        },
        {  
            questionText: '/naturalloga/Q20.png',
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

export default LeadNatural