import React from 'react';
import './AboutMe.css';
import Potrait from '../Images/Slideshow/Potrait.jpeg'


export const AboutMe = () => {
  return (
    <div className='aboutMeContainer' id="AboutMe">
        <div className='aboutMeContent'>
            <h1 className='aboutMeHeader'>About Me</h1>
            <div>
                <img src = {Potrait} alt='chad' className='potrait'></img>
                <p className='aboutMeText'>
                    I am a self taught Game developer with a big passion for software engineering. I have coded multiple projects on my own such as twitter bots, simulations and other personal coding projects
                </p>
                <p className='aboutMeText'>
                    I graduated from Queen Mary University of London, with first class honours in Computer Science.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe;