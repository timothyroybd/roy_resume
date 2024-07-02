import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faRProject } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import stock from "./resources/stock.svg"
import tim from './resources/tim.png';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    
    <div className = "container">
      
      <header className ="fixed_left header">
        {/* <div >
           <img src={tim} width="300px"></img>
        </div> */}
       
        <p >Timothy Roy</p>
        <div className='icon_container'>
           <a href = "mailto:timothyroy2011@gmail.com"><FontAwesomeIcon icon = {faEnvelope} /></a>
          <a href = "https://github.com/timothyroybd"><FontAwesomeIcon icon = {faLinkedinIn} /></a>
          <a href = "https://www.linkedin.com/in/timothy-roy-266612121/"><FontAwesomeIcon icon = {faGithub} /></a>
         
        </div>
        
         
       

        <nav className="nav_menu">
          
            <a href= "#about_me"> About Me  </a>
            <a href= "#experience"> Experience </a>
            <a href= "#skills"> Skills  </a>
            <a href= "#project"> Projects  </a>
            <a href= "#education"> Education</a>
            <a href= "#about_me"> CV PDF</a>
                  
         

          
        </nav>

       
        
      </header>
<main className ="main_content">

   <article id ="about_me">
    <h1> About Me</h1>
          <p>
            As an IT Manager with over 2 years of experience and an MSc in
            Business Analytics, I'm now transitioning into sfotware development
            and data analytics field. I am a self-taught software developer who
            is proficient in HTML5, CSS3, JavaScript, React, Node.js, Python, R,
            SQL. Passionate about continuous learning and innovation, I'm eager
            to bring my skills to exciting software and analytics projects.
          </p>
        </article>
      <section id = "experience">
        <h1>Experience</h1>
        <div>
          <h2> IT Manager - Plastrans Technologies </h2>
          <span> May 2022 - Present</span>
          <ul>
            <li>
              Oversee and maintain Plastrans' comprehensive IT infrastructure
              encompassing hardware and software systems.
            </li>
            <li>
              Implemented automated processes for vacation requests utilizing
              Microsoft Forms, Power Automate, and SharePoint, resulting in
              streamlined operations.
            </li>
            <li>
              Generate detailed reports on annual sales performance using Excel
              and Power BI, emphasizing revenue and volume trends spanning
              multiple years.
            </li>
            <li>
              stablish and manage the Cyber Security online academy, designing
              courses to educate the team on effective online security
              practices.
            </li>
          </ul>
        </div>
        <div>
          <h2> eCommerce Specialist - Brikly </h2>
          <span> May 2020 - April 2022</span>
          <ul>
            <li>Created eCommerce websites using Shopify</li>
            <li>
              Creating monthly and quarterly reports using Google Analytics and
              Shopify Analytics
            </li>
            <li>
              Integrating and experimenting with different 3rd party web Apis
              such Image processing though Nanonets platform
            </li>
            <li>Email marketing using Klaviyo</li>
          </ul>
        </div>
      </section>

      <section id ="skills">
        <h1> Skills</h1>

        <div className='flex_container'>
          <div className ='flex-item'>
        <FontAwesomeIcon icon={faHtml5} />
        <p>HTML5</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faCss3} />
        <p>CSS3</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faJs} />
        <p>JavaScript</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faReact} />
        <p>React</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faNodeJs} />
        <p>Node.JS</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faWordpress} />
        <p>Wordpress</p>  
        </div>


          <div className ='flex-item'>
        <FontAwesomeIcon icon={faGithub} />
        <p>Github</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faPython} />
        <p>Python</p>  
        </div>

          <div className ='flex-item'>
        <FontAwesomeIcon icon={faRProject} />
        <p>R Programming</p>  
        </div>

        <div className ='flex-item'>
        <FontAwesomeIcon icon={faDatabase} />
        <p>SQL</p>  
        </div>

        <div className='flex-item'>
        <FontAwesomeIcon icon={faSquareRootVariable} />
        <p>Statistics</p>  
        </div>
          
        </div>

        
       
        
        

        
      </section>

      <section id ="project">
        <h1>Projects</h1>
        <div className='flex_container'>
          <div className='flex-item'>
            <div className='project_item'>
              <FontAwesomeIcon icon={faArrowTrendUp} className='project_icon' />
             
              <div className='project_desc'>
              <a href="#"> Stock visualization</a>
              <p> 
                Coming soon!

              </p>
              </div>
             
              
            </div>
            
            
            </div>
             <div className='flex-item'>
            <div className='project_item'>
              <FontAwesomeIcon icon={faLayerGroup} className='project_icon' />
            
             <div className='project_desc'>
              <a href="#">Full Stack Application</a>
              <p> 
                Coming soon!
              </p>
              </div>
             
            </div>
            
            
            </div>
             <div className='flex-item'>
            <div className='project_item'>
              <FontAwesomeIcon icon={faLayerGroup} className='project_icon' />
             
              <div className='project_desc'>
              <a href="#"> Full Stack Application</a>
              <p> 
                Coming soon!
              </p>
              </div>
             
            </div>
            
            
            </div>
          
        </div>
      </section>

      <section id = "education">
        <h1> Education</h1>
        <div>
          <h2> Msc. Economics and Business Analytics - JKU </h2>
          <span> March 2022 - Present</span>
          <ul>
            <li>
              Specialized in economics and data analytics, using programming and
              visualization tools to address complex challenges and foster
              analytical growth.
            </li>
            <li>
              Applied modern techniques such as machine learning and algorithms
              to analyze extensive datasets, deriving valuable business insights
              and identifying significant patterns and correlations
            </li>
          </ul>
        </div>
        <div>
          <h2> BA International Business Administration </h2>
          <span> August 2015 - May 2019</span>
          <ul>
            <li>
              North American style education emphasizing finance, marketing, and
              management with a global perspective.
            </li>
            <li>
              Completed internships and authored a thesis analyzing fleet
              movement data in Singapore, providing actionable insights for
              company expansion efforts in the region.
            </li>
          </ul>
        </div>
      </section>
      </main>


      </div>

     
    
  );
}

export default App;
