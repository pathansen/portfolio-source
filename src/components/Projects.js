import React from 'react';

import Project from './Project'
import classes from './Projects.module.css'

class Projects extends React.Component {

  state = {
    data: []
  }

  componentWillMount = () => {
    const data = [
      {
        'projectName': 'Portfolio Website',
        'projectLanguage': 'ReactJS',
        'projectRepoLink': 'https://github.com/pathansen/portfolio-source',
        'thumbnail': '/assets/code.png'
      },
      {
        'projectName': 'Project 2',
        'projectLanguage': 'ReactJS',
        'projectRepoLink': 'https://github.com/pathansen/portfolio-source',
        'thumbnail': '/assets/code.png'
      }
    ];

    this.setState({ data: data });
  }

  render() {

    const { data } = this.state;

    return (
      <div className={classes.projectHeader}>
        <hr style={{width:"90%", borderColor:"rgb(84, 194, 245)"}} />
        <h1>Projects</h1>

        <div className="responsive-grid" style={{width:"95%", paddingLeft:"1%"}}>
          <div className="row" id={classes.projectRow}>

            {data.map(project => {
              return (
                <div className="column" id={classes.projectColumn}>
                  <Project
                    projectName={project.projectName}
                    projectLanguage={project.projectLanguage}
                    projectRepoLink={project.projectRepoLink}
                    thumbnail={project.thumbnail} />
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
