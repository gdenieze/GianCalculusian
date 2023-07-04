import { Link }  from 'react-router-dom'

const card = {
            title: "Matching",
            desription: "Match it!",

}
// const card2 = {
//     title: "Integration of Logarithmic Functions",
//     desription: "Integrating of logaritmic functions"
// }


const Game = ()=>{
    
    return(
        <>
            <div className='quizz pb-5'>
            <div className='courses-wrapper container  text-center'>
                <h1 className='pt-5'>Play the game</h1>
                <p>Try solving each problem and pass the game</p>
                <div className='row justify-content-center'>
                        <div className='col-sm-6 col-md-3 card-wrappers-two'>
                            <Link to='/games/matching'>
                                <div className="card-text-wrapper">
                                    <h3>{card.title}</h3>
                                    <p>{card.desription}</p>
                                    <span>{card.img1}</span>
                                </div>
                            </Link>
                        </div>
                    {/* <div className='col-sm-6 col-md-3 card-wrappers-two'>
                        <Link to='/quiz/lf'>
                            <div className="card-text-wrapper">
                                <h3>{card2.title}</h3>
                                <p>{card2.desription}</p>
                                <span>{card2.img1}</span>
                            </div>
                        </Link>
                    </div> */}
                    {/* <div className='col-sm-6 col-md-3 card-wrappers-two'>
                        <Link to='/quiz/lnl'>
                            <div className="card-text-wrapper">
                                <h3>{card3.title}</h3>
                                <p>{card3.desription}</p>
                                <span>{card3.img1}</span>
                            </div>
                        </Link>
                    </div> */}
                    {/* {/* <div className='col-sm-6 col-md-3 card-wrappers-two'>
                        <Link to='/quiz/ief'>
                            <div className="card-text-wrapper">
                                <h3>{card4.title}</h3>
                                <p>{card4.desription}</p>
                                <span>{card4.img1}</span>
                            </div>
                        </Link>
                    </div> */}
                </div>
                {/* <div className='row justify-content-center'>
               
                    <div className='col-sm-6 col-md-3 card-wrappers-two'>
                        <Link to='/quiz/itf'>
                            <div className="card-text-wrapper">
                                <h3>{card5.title}</h3>
                                <p>{card5.desription}</p>
                                <span>{card5.img1}</span>
                            </div>
                        </Link>
                    </div>
                    <div className='col-sm-6 col-md-3 card-wrappers-two'>
                        <Link to='/quiz/iitf'>
                            <div className="card-text-wrapper">
                                <h3>{card6.title}</h3>
                                <p>{card6.desription}</p>
                                <span>{card6.img1}</span>
                            </div>
                        </Link>
                    </div>
                </div> */}
            </div>
            </div>
        </>
    )
}
export default Game