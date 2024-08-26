import classes from "./Home.module.css";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf-file/Junior Software Developer - Lulu.pdf";
    link.download = "Mosobe Lulu Resume";
    link.click();
  };

  return (
    <div className={classes.section} id="Home">
      <div className={classes.centeredContainer}>
        <div className={classes.textContent}>
          <div className={classes.headerSection}>
            <h1>Lulu Mosobe</h1>
            <h2>Software Developer</h2>
            <p>
              As a highly motivated and quick learner, I am enthusiastic about
              advancing my skills and contributing to dynamic software development
              teams. With a strong commitment to staying up-to-date with the
              latest technologies and best practices, I am dedicated to crafting
              efficient and high-quality software solutions. My passion for
              problem-solving and my experience in Html, Css, Javascript, ReactJs
              and NextJs make me a valuable asset to any software development
              project.
            </p>
            <div>
              <button onClick={handleDownload} className={classes.buttons}>
                Download My Resume
              </button>
            </div>
          </div>
        </div>
        <div className={classes.profileContainer}>
          <img
            src="/images/WhatsApp Image 2023-10-16 at 19.45.40_e43ddf9f.jpg"
            className={classes.profilePicture}
            alt="ProfilePic"
          />
          <div className={classes.icons}>
            <a className={classes.iconlink} href="https://github.com/MOSOBELULU">
              <img src="/images/github (1).png" alt="GitHub" />
            </a>
            <a
              className={classes.iconlink}
              href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/"
            >
              <img src="/images/linkedin (1).png" alt="LinkedIn" />
            </a>
            <a className={classes.iconlink} href="https://wa.me/C2IKIHH3LESAM1">
              <img src="/images/whatsapp.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.customShapeDividerBottom1718968028}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes.shapeFill}
          ></path>
        </svg>
      </div>
    </div>
  );
}
