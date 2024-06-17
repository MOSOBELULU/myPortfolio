import classes from './Projects.module.css'

export default function Projects() {
  const projectList = [
    {
      title: "Budget Pal",
      imageUrl: "/images/budget-logo.png",
      link: "https://ur-budget-pal.vercel.app/",
      description: ' This is a Budget app that allows users to create their monthly budget by calculating their total income and expenses and determining the balance for the month. '
    },
    {
      title: "Next.js Blog",
      imageUrl: "/images/blog.png",
      link: "https://blog-nextjs-project-csnb.vercel.app/"
    },
    {
      title: "Podcast App",
      imageUrl: "/images/podcastapp.png",
      link: "https://github.com/MOSOBELULU/PodcastApp.git",
      description: "This platform is designed to revolutionize your podcast experience. Browse shows, enjoy episodes, and curate your favorites effortlessly!"
    },
    {
      title: "Recipe App",
      imageUrl: "/images/recipe app.png",
      link: "cooking-devs.vercel.app/",
      description: "Recipe App offers a seamless culinary experience, boasting features like recipe card display, filtering options, search functionality, favourites management, editing capabilities, theme toggling, pagination, and detailed recipe previews."
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
            <div className={classes.description}>{project.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
