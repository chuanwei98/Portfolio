import React, { useEffect, useState } from "react";
import './Intro.css';
import TimeGame from '../Images/Slideshow/TimeGame.gif'
import SteelJudgement from '../Images/Slideshow/Steeljudgement.gif'
import HorrorGame from '../Images/Slideshow/HorrorGame.gif'


const images = [TimeGame, SteelJudgement,HorrorGame];


export const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 5000)
      return () => clearInterval(intervalId);
  }, [currentIndex])

  return (
    <section className= "sectionContent" id="Home">
        <div className='titleContent'>
            <span className="gameDeveloper">Game Developer</span><span className="andSpan">and</span><span className="softwareEngineer"> Software Engineer</span>
            <p className="name">Tan Chuan Wei</p>
            <span className ="languages">C#|SQL|Python|C++|Javascript|PHP|CSS|HTML|Java|Assembly</span>
        </div>
        <img src={images[currentIndex]} alt= "gif" className='image'/>
    </section>
  )
}

export default Intro