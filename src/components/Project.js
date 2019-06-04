import React from 'react';

import ProjectModal from './ProjectModal'
import classes from './Project.module.css'

class Project extends React.Component {

  state = {
    displayModal: false
  }

  toggleModalHandler = () => {
    const updateDisplayModal = !this.state.displayModal;
    this.setState({ displayModal: updateDisplayModal });
  }

  render() {

    const { projectName, projectLanguage, projectRepoLink, thumbnail} = this.props;
    const { displayModal } = this.state;

    return (
      <div>

        {displayModal &&
          <ProjectModal
            toggleModal={this.toggleModalHandler}
            projectName={projectName}
            projectLanguage={projectLanguage}
            projectRepoLink={projectRepoLink} />
        }

        <div
          style={{backgroundImage:`url(${process.env.PUBLIC_URL + thumbnail})`}}
          className={classes.projectItem}
          onClick={this.toggleModalHandler}
        >
          <div className={classes.titleCard}>
            <h4 style={{margin:"0"}}>{projectName}</h4>
            <h6 style={{margin:"0", fontWeight:"normal"}}>({projectLanguage})</h6>
          </div>
            <a className={classes.repositoryLink} href={projectRepoLink}>
              <div href={projectRepoLink}>
                <h6 style={{margin:"0", fontWeight:"normal"}}>
                  <i class="fa fa-github"></i> GitHub Repository
                </h6>
              </div>
            </a>
        </div>
      </div>
    )
  }
}

export default Project;
