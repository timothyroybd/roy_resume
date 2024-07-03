import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import '../styles/Projects.css'
export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="flex_container">
        <div className="flex-item">
          <div className="project_item">
            <FontAwesomeIcon icon={faArrowTrendUp} className="project_icon" />

            <div className="project_desc">
              <a href="#"> Stock visualization</a>
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="project_item">
            <FontAwesomeIcon icon={faLayerGroup} className="project_icon" />

            <div className="project_desc">
              <a href="#">Full Stack Application</a>
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="project_item">
            <FontAwesomeIcon icon={faLayerGroup} className="project_icon" />

            <div className="project_desc">
              <a href="#"> Full Stack Application</a>
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
