import React from 'react';

import ProjectModal from './ProjectModal'
import classes from './Project.module.css'

class Project extends React.Component {

  state = {
    displayModal: false
  }

  toggleModalHandler = () => {
    const { displayModal } = this.state;
    document.body.style.overflow = displayModal ? 'auto' : 'hidden';
    this.setState({ displayModal: !displayModal });
  }

  render() {

    const {
      projectName,
      projectLanguage,
      projectRepoLink,
      projectDescription,
      thumbnail,
      figures,
      captions
    } = this.props;
    const { displayModal } = this.state;

    const iconCode = (projectLanguage === 'ReactJS') ? 'fab fa-react' :
                     (projectLanguage === 'Angular') ? 'fab fa-angular' :
                     (projectLanguage === 'Python') ? 'fab fa-python' :
                     (projectLanguage === 'Verilog') ? 'fas fa-microchip' :
                     (projectLanguage === 'JavaScript') ? 'fab fa-js' :
                     (projectLanguage === 'Swift (iOS)') ? 'fab fa-apple' :
                     (projectLanguage === 'Java (Android)') ? 'fab fa-android' :
                     (projectLanguage === 'Java') ? 'fab fa-java' : 'fas fa-code';

    return (
      <div>

        {displayModal &&
          <ProjectModal
            toggleModal={this.toggleModalHandler}
            projectName={projectName}
            projectLanguage={projectLanguage}
            projectRepoLink={projectRepoLink}
            projectDescription={projectDescription}
            figures={figures}
            captions={captions} />
        }

        {projectName !== 'placeholder' &&
          <div
            style={{backgroundImage:`url(${process.env.PUBLIC_URL + thumbnail})`}}
            className={classes.projectItem}
          >
            <div className={classes.titleCard} onClick={this.toggleModalHandler}>
              <h4 style={{margin:"0"}}>{projectName}</h4>
              <h6 style={{margin:"0", fontWeight:"normal"}}>
              <i className={iconCode}></i> &nbsp;{projectLanguage}
              </h6>
            </div>
              <a target="_blank" rel="noreferrer noopener" className={classes.repositoryLink} href={projectRepoLink}>
                <div href={projectRepoLink}>
                  <h6 style={{margin:"0", fontWeight:"normal"}}>
                    <i className="fab fa-github"></i> GitHub Repository
                  </h6>
                </div>
              </a>
          </div>
        }

      </div>
    )
  }
}

export default Project;
