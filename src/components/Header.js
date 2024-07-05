import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles/App.css';
import '../styles/Header.css'
import '../styles/Responsive.css'
export default function Header (){
    return(
        <>
        <p>Timothy Roy</p>
        <div className="icon_container">
          <a href="mailto:timothyroy2011@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/timothyroybd">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.linkedin.com/in/timothy-roy-266612121/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
       

        <nav className="nav_menu">
          <a href="#about_me"> About Me </a>
          <a href="#experience"> Experience </a>
          <a href="#skills"> Skills </a>
          <a href="#project"> Projects </a>
          <a href="#education"> Education</a>
          <a href="https://drive.google.com/file/d/1_b7G6EbEdIGLea8dJo0xdN2mWqp2apkX/view?usp=sharing" target='_blank'> CV PDF</a>
        </nav>

       

       
        
        </>
    )
}