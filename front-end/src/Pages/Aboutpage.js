import React from 'react'
import student from '../Components/images/gian.jpg'
import student2 from '../Components/images/loui.jpg'
import student3 from '../Components/images/Picture2.png'
import student4 from '../Components/images/kath.gif'
import team1 from '../Components/images/tteam.png'
import cs from '../Components/images/cs.jpg'
import bul from '../Components/images/bul.jpg'



function Aboutpage() {
  return (
    <div>
      <div className='about-header-img pt-5'>
        <div className='container'>
        <h1 className='text-center'>About Us</h1>
        <p className='about-sub'>
          We are a 4th year college students of Bulacan State University, 
          College of Science taking Bachelor of Science in Mathematics 
          Major in Computer Science who is also having a hard time taking our major mathematics subjects especially calculus, 
          the information that the professors provide seems not enough for us students to 
          understand certain steps and calculation under integral calculus that is why we build 
          Calculusian as a source of additional information about the topics that Bulacan State University,
          College of Science is teaching. We understand that there are students who don’t excel because of lack of information. 
          This is for you and we care for you.
        </p>
        </div>
        
      </div>
        <div className='container about-page mt-5'>
          <div className='row align-items-center'>
            
            <div className='col-sm-12 col-md-6'>
                <h2>Our Team</h2>
                <p className='about-p'>
                  Students from Bulacan State University, College of Science who are taking Bachelor of Science in Mathematics 
                  Major in Computer Science who’ purpose is to develop a system that can help students learn Integral 
                  Calculus and to accomplish a research study dedicated to our College of Science of Bulacan State University.</p>
              </div>
              <div className='col-sm-12 col-md-6 p-5'>
                <img src={team1} alt='about-img' className='img-fluid'/>
              </div>
          </div>
          <h2 className='text-center'>Developers</h2>
          <div className='row mt-3'>
              
              <div className='col-sm-6 col-md-3 '>
                <div className='developers p-3 mt-5'>
                  <img src={student} alt='' className='img-fluid mb-3'/>
                  <h5>Gian Denise Garcia Martin</h5>
                  <p>Researcher/Documentation</p>
                </div>  
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='developers p-3 mt-5'>
                  <img src={student2} alt='' className='img-fluid mb-3'/>
                  <h5>Louies Erbel Policarpio</h5>
                  <p>Main Developer</p>
                </div>  
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='developers p-3 mt-5'>
                  <img src={student3} alt='' className='img-fluid mb-3'/>
                  <h5>Joren Real</h5>
                  <p>Team Lead/Developer</p>
                </div>  
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='developers p-3 mt-5'>
                  <img src={student4} alt='' className='img-fluid mb-3'/>
                  <h5>Maria Kathleen Denise Flores Bañarez</h5>
                  <p>Researcher/Documentation</p>
                </div>  
              </div>
             
              
          </div> 
          <h2 className='text-center'>Project Mentors</h2> 

          <div className='supporters mt-5 '>
            <div className='card-supporters '>
              <div className='card-simg mb-3'>
                <img src={cs} alt='the' className='img-fluid'/>
              </div>
              <h5>Ph. D Thelma V. Pagtalunan </h5> 
              <p>Thesis professor</p> 
            </div>  
            <div className='card-supporters '>
              <div className='card-simg mb-3'>
                <img src={cs} alt='bas' className='img-fluid'/>
              </div>
              <h5>Prof. Deo Stephanie Angeles</h5> 
              <p>Thesis adviser</p> 
            
            </div> 
            <div className='card-supporters '>
              <div className='card-simg mb-3'>
                <img src={cs} alt='keil' className='img-fluid'/>
              </div>
              <h5>BSM CS 4C</h5> 
              <p>Colleagues</p> 
            </div>
          </div>
          <div className='supporters mb-5'>
              <div className='card-supporters'>
                <div className='card-simg'>
                  <img src={bul} alt='bsu' className='img-logo'/>
                </div>
                <h5>Bulacan State University</h5> 
                <p>University</p> 
              </div>  
              <div className='card-supporters'>
                <div className='card-simg'>
                  <img src={cs} alt='cs' className='img-logo'/>
                </div>
                <h5>College of Science</h5> 
                <p>College Department</p> 
              </div> 
          </div>
          
            
        </div>
      
    </div>
  )
}

export default Aboutpage
