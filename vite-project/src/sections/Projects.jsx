import classes from './Projects.module.css'

export default function Projects() {
  const projectList = [
    {
      title: "Budget Pal",
      imageUrl: "/images/budget-logo.png",
      link: "https://ur-budget-pal.vercel.app/"
    },
    {
      title: "Next.js Blog",
      imageUrl: "/images/blog.png",
      link: "https://blog-nextjs-project-csnb.vercel.app/"
    },
    {
      title: "Podcast App",
      imageUrl: "/images/podcastapp.png",
      link: "https://github.com/MOSOBELULU/PodcastApp.git"
    }
  ];

  return (
    <div className={classes.projectsSection} id="Projects">
      <h1 className={classes.heading}>My Projects</h1>
      <div className={classes.projectsGrid}>
        {projectList.map((project, index) => (
          <a href={project.link} key={index} className={classes.projectCard} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} className={classes.projectImage} />
            <div className={classes.projectTitle}>{project.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
