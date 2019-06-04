import React from 'react';

import classes from './About.module.css'

const about = (props) => {
  return (
    <div className={classes.aboutHeader}>
      <h1 style={{margin:"0"}}>PATRICK HANSEN</h1>
      <h6 style={{margin:"0", marginBottom:"10%"}}>Web Development | Machine Learning | Data Science</h6>
    </div>
  )
}

export default about;
