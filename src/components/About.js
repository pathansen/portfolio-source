import React from 'react';

import classes from './About.module.css';

const about = (props) => {
  return (
    <div className={classes.aboutHeader}>
      <h1 style={{margin:"0", fontFamily:"Titillium Web", letterSpacing:"0.15em"}}>PATRICK HANSEN</h1>
      <h6 style={{margin:"0", marginBottom:"3%", fontFamily:"Titillium Web"}}>Web Development | Machine Learning | Data Science</h6>
      <h6 style={{fontWeight:"normal", margin:"0", marginBottom:"10%", fontFamily:"Titillium Web"}}>
        <span>
          <a target="_blank" rel="noreferrer noopener" className={classes.socialLink} href="https://www.linkedin.com/in/pat-hansen/" >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </span>
        <span>
          <a target="_blank" rel="noreferrer noopener" className={classes.socialLink} href="https://github.com/pathansen">
            <span style={{color:"white"}}>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span> <i className="fab fa-github-square"></i> GitHub
          </a>
        </span>
        <span>
          <a target="_blank" rel="noreferrer noopener" className={classes.socialLink} href="https://gitlab.com/pathansen">
          <span style={{color:"white"}}>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span> <i className="fab fa-gitlab"></i> GitLab
          </a>
        </span>
      </h6>
    </div>
  )
}

export default about;
