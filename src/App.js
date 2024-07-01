import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import tim from './resources/tim.png';
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
          <ul>
            <li> Experience </li>
            <li> Skills </li>
            <li> Portfolio </li>
            <li> Education </li>
            <li> Download CV </li>
           
          </ul>

          
        </nav>

       
        
      </header>
<main className ="main_content">

   <article>
          <p>
            As an IT Manager with over 2 years of experience and an MSc in
            Business Analytics, I'm now transitioning into sfotware development
            and data analytics field. I am a self-taught software developer who
            is proficient in HTML5, CSS3, JavaScript, React, Node.js, Python, R,
            SQL. Passionate about continuous learning and innovation, I'm eager
            to bring my skills to exciting web development projects.
          </p>
        </article>
      <section>
        <div>
          <h1> IT Manager - Plastrans Technologies </h1>
          <p> May 2022 - Present</p>
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
          <p> May 2020 - April 2022</p>
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

      <section>
        <div>
          <h1>Development</h1>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CMS</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <h1>Data Analytics</h1>
          <ul>
            <li>R</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Statistics</li>
          </ul>
        </div>
        <div>
          <h1>Soft Skills</h1>
          <ul>
            <li>Effective communication</li>
            <li>Problem-solving</li>
            <li>Critical thinking</li>
            <li>Adaptability</li>
            <li>Team work</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
        </div>
      </section>

      <section>
        <div>
          <h2> Msc. Economics and Business Analytics - JKU </h2>
          <p> March 2022 - Present</p>
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
          <p> August 2015 - May 2019</p>
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
