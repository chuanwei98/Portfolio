import React from 'react'
import './GameDevPortfolio.css'
import TimeGame from '../Images/Slideshow/TimeGame.gif'
import ShaderGraph from '../Images/Slideshow/ShaderGraph.gif'
import SteelJudgement from '../Images/Slideshow/Steeljudgement.gif'

export const GameDevPortfolio = () => {
  return (
    <div className='gameDevPortfolio' id="GameDevPortfolio">
      <h1>
        GameDev Portfolio
      </h1>
      <div className='contents'>
        <div className='sectionContainer'>
          <img src={TimeGame} className='timeGameImage'></img>
          <div className='descriptionContainer'>
            <p className='header'>2D puzzle platformer</p>
            <p className='description'>2D Game programming</p>
            <p className='description'>2D sprite animation (pixel art)</p>
            <p className='description'>2D Level Design</p>
          </div>
        </div>
        <div className='sectionContainer'>
          <div className='descriptionContainer'>
            <p className='header'>Visual Effects</p>
            <p className='description'>Knowledge of shader graphs</p>
            <p className='description'>Particle effects</p>
            <p className='description'>VFX graphs</p>
          </div>
          <img src={ShaderGraph} className='pictureRight'></img>
        </div>
        <div className='sectionContainer'>
          <img src={SteelJudgement} className='timeGameImage'></img>
          <div className='descriptionContainer'>
            <p className='header'>Steel Judgement (FPS Game)</p>
            <p className='description'>UI and Audio systems coding</p>
            <p className='description'>Weapon, Mechanics, Enemy Design and coding</p>
            <a href="https://twitter.com/SteelJudgment" className='twitterLink'>Twitter Link</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GameDevPortfolio;