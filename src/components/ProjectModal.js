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

    const {
      projectName,
      projectLanguage,
      projectRepoLink,
      projectDescription,
      figures,
      captions
    } = this.props;

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

            <h5 style={{fontWeight:"normal", margin:"0"}}>
              <span>
                Written in <b>{projectLanguage}</b>
              </span>
              <span>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;
              </span>
              <span>
                <a target="_blank" rel="noreferrer noopener" className={classes.repoLinkStyle} href={projectRepoLink}>
                  <i className="fab fa-github"></i> Link to Code on GitHub
                </a>
              </span>
            </h5>


          </div>


          <div className={classes.projectDescription}>
            <hr />
            {projectDescription.map((description, index) => <p key={index}>{description}</p> )}
            <hr />
          </div>

          <div className={classes.projectFigures}>
            {figures.map((figure, index) => {
              return (
                <figure key={index}>
                  <img
                    src={process.env.PUBLIC_URL + figure}
                    alt="Something Went Wrong..."
                    className={classes.figure} />
                  <figcaption>Fig. {index + 1}. {captions[index]}</figcaption>
                </figure>
              )
            })}
          </div>

        </div>

      </div>
    )
  }
}

export default ProjectModal;
