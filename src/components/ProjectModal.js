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

    const { projectName } = this.props;

    return (
      <div
        className={classes.modalBackground}
        onKeyPress={this.handleKeyUp}
        onClick={this.handleOutsideModal}>

        <div className={classes.modalForeground}>
          <div onClick={this.handleClosePress} className={classes.close}>
            <p className={classes.closeText}>&times;</p>
          </div>
          <p>{projectName}</p>
        </div>

      </div>
    )
  }
}

export default ProjectModal;
