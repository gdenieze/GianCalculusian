import { Link }  from 'react-router-dom'

const card = {
            title: "Integration of Power Rule",
            desription: "Integrating of power rule",

}
// const card2 = {
//     title: "Integration of Logarithmic Functions",
//     desription: "Integrating of logaritmic functions"
// }
const card3 = {
    title: "Integrals Leading to Natural Logarithms",
    desription: "Integrate natural log"
}
const card4 = {
    title: "Integration of Exponential Functions",
    desription: "Integrate exponential functions"
}
const card5 = {
    title: "Integrals of Trigonometric Functions",
    desription: "Integrate trigo functions"
}
const card6 = {
    title: "Integrals of Inverse Trigonometric Functions",
    desription: "Integrate inver trigo functions"
}
const Courses = ()=>{
    
    return(
        <><div className='course pb-5'>
            <div className='courses-wrapper container  text-center'>
                <h1 className='pt-5'>Learn Integration</h1>
                <p>This courses include all of the topics about integration</p>
                <div className='row justify-content-center'>
                        <div className='col-sm-12 col-md-3 card-wrappers'>
                            <Link to='/courses/limits'>
                              
                                    <h3>{card.title}</h3>
                                    <p>{card.desription}</p>
                                    <span>{card.img1}</span>
                               
                            </Link>
                        </div>
                    {/* <div className='col-sm-12 col-md-3 card-wrappers'>
                        <Link to='/courses/ifl'>
                            <div className="card-text-wrapper">
                                <h3>{card2.title}</h3>
                                <p>{card2.desription}</p>
                                <span>{card2.img1}</span>
                            </div>
                        </Link>
                    </div> */}
                    <div className='col-sm-12 col-md-3 card-wrappers'>
                        <Link to='/courses/ilnl'>
                          
                                <h3>{card3.title}</h3>
                                <p>{card3.desription}</p>
                                <span>{card3.img1}</span>
                       
                        </Link>
                    </div>
                    <div className='col-sm-12 col-md-3 card-wrappers'>
                        <Link to='/courses/ief'>
                           
                                <h3>{card4.title}</h3>
                                <p>{card4.desription}</p>
                                <span>{card4.img1}</span>
                            
                        </Link>
                    </div>
                </div>
                <div className='row justify-content-center'>
                
                    <div className='col-sm-12 col-md-3 card-wrappers'>
                        <Link to='/courses/itf'>
                          
                                <h3>{card5.title}</h3>
                                <p>{card5.desription}</p>
                                <span>{card5.img1}</span>
                          
                        </Link>
                    </div>
                    <div className='col-sm-12 col-md-3 card-wrappers'>
                        <Link to='/courses/iitf'>
                           
                                <h3>{card6.title}</h3>
                                <p>{card6.desription}</p>
                                <span>{card6.img1}</span>
                           
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Courses