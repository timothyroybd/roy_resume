import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faRProject } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import '../App.css';
export default function Skills() {
  return (
    <>
      <h1> Skills</h1>

      <div className="flex_container">
        <div className="flex-item">
          <FontAwesomeIcon icon={faHtml5} />
          <p>HTML5</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faCss3} />
          <p>CSS3</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faJs} />
          <p>JavaScript</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faNodeJs} />
          <p>Node.JS</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faWordpress} />
          <p>Wordpress</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faGithub} />
          <p>Github</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faPython} />
          <p>Python</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faRProject} />
          <p>R Programming</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faDatabase} />
          <p>SQL</p>
        </div>

        <div className="flex-item">
          <FontAwesomeIcon icon={faSquareRootVariable} />
          <p>Statistics</p>
        </div>
      </div>
    </>
  );
}
