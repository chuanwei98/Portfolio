import './App.css'
import Navbar from './Components/navbar.js';
import Intro from './Components/Intro/intro.js';
import Resume from './Components/ResumeContent/Resume.js';
import AboutMe  from './Components/AboutMe/AboutMe.js';
import GameDev from './Components/GameDevPortfolio/GameDevPortfolio.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <AboutMe ></AboutMe>
      <Resume></Resume>
      <GameDev></GameDev>
    </div>
  );
}

export default App;
