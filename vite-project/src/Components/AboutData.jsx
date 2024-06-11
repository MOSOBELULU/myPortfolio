import classes from "./AboutData.module.css";

function AboutData() {
 

  return (
    <div className={classes.AboutData}>
      <div className={classes.imageContainer}>
        <img src="/images/aboutpage.png" alt="aboutpage" />
      </div>
      <div className={classes.linksContainer}>
      
        <h2>Education</h2>
    
      <br />
     
        <h2>Skills</h2>
    
      
      </div>
    </div>
  );
}

export default AboutData;