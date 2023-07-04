import React from 'react'
import matlab from '../Components/images/matlab.png'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';


function HomePage() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='container '>
        <div className='home-wrapper row align-items-center mt-2 home'>
            <div className='col-md-6 col-sm-12'>
                <h1 className='home-card-head'>Calculusian</h1>
                <p>Calculusian is an online learning system which purpose is to 
                    provide additional information about the selected topics of integral calculus. 
                    It is dedicated to Bulacan State University, College of science to help faculty 
                    in teaching students face to face or even virtually.
                </p>
                <div className='home-main-btn-wrapper'>
                <button className='home-main-btn'><Link to='/about' className='color-text'>Learn about</Link></button>
                </div>
                
            </div>
            <div className='col-md-6 col-sm-12'>
               <img src={matlab} alt='hhome' className='img-fluid'/>
            </div>
        </div>
        <div className='what-is mb-5'>
            <h2 className='home-card-head'>What's inside of Calculusian?</h2>
            <p>Calculusian have pages that can be use by the user to communicate and learn.</p>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='card-home text-center '>
                    <h2 className='home-card-head'>Forum page </h2>
                    <h5>It is a page where users can interact, share information and questions 
                        that in line 
                        to mathematics it is not only limited to integral calculus.</h5>
                    <button className='home-btn'><Link to='/forum' className='color-text'>Learn more</Link></button>
                </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-home text-center'>
                    <h2 className='home-card-head'>Course page</h2>
                    <h5>It contains topics about integral calculus that the Bulacan State University, 
                        College of Science focuses in teaching.</h5>
                    <button className='home-btn'><Link to='/courses' className='color-text'>Learn more</Link></button>
                </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-home text-center'>
                    <h2 className='home-card-head'>Quiz page </h2>
                    <h5>This is where the users challenge their learnings about the topics.</h5>
                    <button className='home-btn'><Link to='/quiz' className='color-text'>Learn more</Link></button>
                </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-home text-center'>
                    <h2 className='home-card-head'>Game page </h2>
                    <h5>You will know that you can have fun while learning integral calculus.</h5>
                    <button className='home-btn'><Link to='/games' className='color-text'>Learn more</Link></button>
                </div>
      </Carousel.Item>
        </Carousel>

        </div>
        
        
    </div>
  )
}

export default HomePage
