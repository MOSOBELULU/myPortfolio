import classes from "./AboutData.module.css";

function AboutData() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf-file/Junior Software Developer - Lulu.pdf";
    link.download = "Mosobe Lulu Resume";
    link.click();
  };

  return (
    <div className={classes.AboutData}>
      <div className={classes.imageContainer}>
        <img src="/images/aboutpage.png" alt="aboutpage" />
      </div>
      <div className={classes.linksContainer}>
      
        <h2>Education</h2>
    
      <br />
     
        <h2>Skills</h2>
    
      <button onClick={handleDownload}>Download My Resume</button>
      </div>
    </div>
  );
}

export default AboutData;