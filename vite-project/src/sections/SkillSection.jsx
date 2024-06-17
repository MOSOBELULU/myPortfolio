import { skillsData } from "../Components/DummyData";
import classes from './SkillSection.module.css';

function SkillSection() {
  // const images = {
  //   TechnicalSkills: '/images/skillpage.png',
  //   Frameworks: '/images/frameworks.png',
  //   Database: '/images/Database.png',
  //   SoftSkills: '/images/softskills.png'
  // };

  return (
    <div className={classes.SkillSection}>
      <h1 className={classes.SkillHeading}>Skills</h1>
      <ul className={classes.SkillList}>
        {Object.keys(skillsData).map((category, index) => (
          <li key={index} className={classes.SkillItem}>
            <div className={classes.SkillContent}>
              <div className={classes.SkillLeft}>
                <h2 className={classes.SkillCategory}>
                  {category === 'TechnicalSkills'
                    ? 'Technical Skills'
                    : category === 'SoftSkills'
                    ? 'Soft Skills'
                    : category}
                </h2>
                <ul className={classes.SkillSubList}>
                  {skillsData[category].map((skill, skillIndex) => (
                    <li key={skillIndex} className={classes.Skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes.SkillRight}>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillSection;
