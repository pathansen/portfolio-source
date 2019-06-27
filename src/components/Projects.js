import React from 'react';

import projects from './projects.json';

import Project from './Project';
import classes from './Projects.module.css';

class Projects extends React.Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    const data = projects.data;
    this.setState({ data: data });
  }

  render() {

    const { data } = this.state;

    if (data.length % 3 === 2) {
      data.push({'projectName': 'placeholder'});
    }

    return (
      <div className={classes.projectHeader}>
        <hr style={{width:"90%", borderColor:"rgb(84, 194, 245)"}} />
        <h2>Projects</h2>

        <div className="responsiveGrid" style={{width:"95%", paddingLeft:"1%"}}>
          <div className="row" id={classes.projectRow}>

            {data.map((project, index) => {
              return (
                <div key={index} className="column" id={classes.projectColumn}>
                  <Project
                    projectName={project.projectName}
                    projectLanguage={project.projectLanguage}
                    projectRepoLink={project.projectRepoLink}
                    projectDescription={project.projectDescription}
                    thumbnail={project.thumbnail}
                    figures={project.figures}
                    captions={project.captions} />
                </div>
              )
            })}

          </div>
        </div>
      </div>
    )
  }

}

export default Projects;
