import { skillsData } from "../Components/DummyData";
import classes from './SkillSection.module.css'
function SkillSection() {

    const images = {
      TechnicalSkills: '../../public/images/skillpage.png',
      Frameworks: '../../public/images/frameworks.png',
      Database: '../../public/images/Database.png',
      SoftSkills: '../../public/images/softskills.png'
    };
  
    return (
      <div className={classes.SkillPage}>
        <h1 className={classes.SkillHeading}>Skills</h1>
        <div className={classes.SkillsContent}>
          <div className={classes.SkillsListContainer}>
            {Object.keys(skillsData).map((category, index) => (
              <div key={index} className={classes.SkillsCategory}>
                <div className={classes.CategoryContent}>
                  <div className={classes.CategoryLeft}>
                    <h2 className={classes.Category}>
                      {category === 'TechnicalSkills'
                        ? 'Technical Skills'
                        : category === 'SoftSkills'
                        ? 'Soft Skills'
                        : category}
                    </h2>
                    <ul className={classes.SkillsList}>
                      {skillsData[category].map((skill, skillIndex) => (
                        <li key={skillIndex} className={classes.SkillItem}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={classes.CategoryRight}>
                    <img
                      src={images[category]}
                      className={classes.CategoryImage}
                      alt={`${category} image`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    );
  }
  
  export default SkillSection;
  