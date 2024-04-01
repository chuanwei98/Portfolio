import React from 'react'
import Collapsible from 'react-collapsible';
import './resume.css'
import ResumeDownload from '../ExtraContents/ChuanWeiResume.pdf'

export const Resume = () => {
  return (
    <div className='resume' id="Portfolio">
      <h1>
        Portfolio
      </h1>
      <p>
        Projects I have worked on and or things I have done
      </p>
      <Collapsible trigger="Web Development" triggerTagName='button' triggerClassName='triggerClass' triggerOpenedClassName='triggerClassOpen'> 
        <div className='innerCollapsible'>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                React
            </li>
            <li className='innerCollapsibleContent'>
                Knowledge of React.js. This Portfolio website is built on react.
            </li>
          </div>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                Blog Website Creation
            </li>
            <li className='innerCollapsibleContent'>
              Built a blog website with a login page, allowing users to create an account, as well as create blog posts,
              using PHP and SQL to handle the transfer of data to a database as well as its storage.
            </li>
            <li className='innerCollapsibleContent'>
              Created a frontpage for the website using CSS and HTML as well as a user interface to allow navigation of
              the site using Javascript
            </li>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Java" triggerTagName='button' triggerClassName='triggerClass' triggerOpenedClassName='triggerClassOpen'> 
        <div className='innerCollapsible'>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                Compiler
            </li>
            <li className='innerCollapsibleContent'>
                Built a compiler using java as an AST (abstract search tree).
            </li>
          </div>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                Java Tutor
            </li>
            <li className='innerCollapsibleContent'>
              Taught first year students in University basic Java coding and OOP concepts.
            </li>
            <li className='innerCollapsibleContent'>
              Created a frontpage for the website using CSS and HTML as well as a user interface to allow navigation of
              the site using Javascript
            </li>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Python (AI)" triggerTagName='button' triggerClassName='triggerClass' triggerOpenedClassName='triggerClassOpen'> 
        <div className='innerCollapsible'>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                AI image classifier
            </li>
            <li className='innerCollapsibleContent'>
                Using pytorch and CIFAR imageset, trained an AI to differentiate and recognise different images that it is given using a CNN (convolutional neural network) 
            </li>
          </div>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
              Link Tree
            </li>
            <li className='innerCollapsibleContent'>
              Wrote an algorithm for linked tree traversal
            </li>
            <li className='innerCollapsibleContent'>
              Created a frontpage for the website using CSS and HTML as well as a user interface to allow navigation of
              the site using Javascript
            </li>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Unity (C#)" triggerTagName='button' triggerClassName='triggerClass' triggerOpenedClassName='triggerClassOpen'> 
        <div className='innerCollapsible'>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                Traffic simulation
            </li>
            <li className='innerCollapsibleContent'>
                Made a traffic simulation where the user can build their own roads and houses. Using the A* pathfinding algorithm, the cars will path to their destination simulating real traffic 
            </li>
            <li className='innerCollapsibleContent'>
              built using C# and Unity. Used A* pathfinding algorithms 
            </li>
          </div>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
              Game Development
            </li>
            <li className='innerCollapsibleContent'>
              Made various games using Unity and C# code. Incorporating Object Oriented programming (OOP) principles, github for code management with other team members, 
              UI interfaces and more. Knowledge of animating sprites and some rendering systems
            </li>
            <li className='innerCollapsibleContent'>
              Made First Person Shooter(FPS), 2D platformer and 3D horror game. See GameDev section for more in depth info.
            </li>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Big Data (Data Management)" triggerTagName='button' triggerClassName='triggerClass' triggerOpenedClassName='triggerClassOpen'> 
        <div className='innerCollapsible'>
          <div className='innerCollapsibleBulletPoint'>
            <li className='innerCollapsibleHeader'>
                Big Data analysis
            </li>
            <li className='innerCollapsibleContent'>
              Queried 2TB of cryptocurrency scam data from AWS S3 using PySpark, utilising a MapReduce approach
              to transform the data for analysis
            </li>
            <li className='innerCollapsibleHeader'>
              SQL Database creation
            </li>
            <li className='innerCollapsibleContent'>
              Planned a created an SQL database with a team in university.
            </li>
          </div>
        </div>
      </Collapsible>
      <h3>Abstract</h3>
      <p className='summaryContent'>My biggest skill in my opinion would be knowledge on OOP concepts. My two most profecient languages would be Java and C# as I have coded
      with it for projects not only in school but during my own time for over a few years now. If you wish to see more in depth details this is a link to my <a href={ResumeDownload} download>resume</a>
      </p>
    </div>
  )
}

export default Resume