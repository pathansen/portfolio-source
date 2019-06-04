import React from 'react';

import classes from './ProjectModal.module.css'

class ProjectModal extends React.Component {

  handleKeyUp = (event) => {
    const { toggleModal } = this.props;
    if (event.keyCode === 27) {
      toggleModal();
    }
  }

  handleClosePress = (event) => {
    const { toggleModal } = this.props;
    toggleModal();
  }

  componentDidMount = () => {
    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handleKeyUp, false);
  }

  render() {

    const { projectName, projectLanguage, projectRepoLink } = this.props;

    return (
      <div
        className={classes.modalBackground}
        onKeyPress={this.handleKeyUp}
        onClick={this.handleOutsideModal}>

        <div className={classes.modalForeground}>
          <div onClick={this.handleClosePress} className={classes.close}>
            <p className={classes.closeText}>&times;</p>
          </div>
          <div className={classes.projectTitle}>
            <h1 className={classes.projectTitle}>{projectName}</h1>
            <h5 style={{fontWeight:"normal", margin:"0", marginBottom:"0.5%"}}>Written in <b>{projectLanguage}</b></h5>
            <a className={classes.repoLinkStyle} href={projectRepoLink}>
              <h5 style={{fontWeight:"normal", margin:"0"}}><i class="fa fa-github"></i> Link to Code on GitHub</h5>
            </a>
          </div>

          <hr style={{width:"90%"}} />

          <div className={classes.projectDescription}>
            <p>Description here...</p>
          </div>

          <hr style={{width:"90%"}} />

          <div className={classes.projectFigures}>
            <p>Figures here...</p>
            <figure>
              <img
                src={process.env.PUBLIC_URL + '/assets/code.png'}
                alt="Something Went Wrong"
                style={{width:"80%"}} />
              <figcaption>Filler text...</figcaption>
            </figure>
          </div>

        </div>

      </div>
    )
  }
}

export default ProjectModal;
