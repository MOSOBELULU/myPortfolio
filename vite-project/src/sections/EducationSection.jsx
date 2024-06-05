import { educationData } from "../Components/DummyData";
import classes from './EducationSection.module.css'

 function EducationSection() {
    return (
        <div className={classes.EducationSection}>
          <h1 className={classes.EducationHeading}>Education</h1>
          <ul className={classes.EducationList}>
            {educationData.map((item, index) => (
              <li key={index} className={classes.EducationItem}>
                   {/* {item.ImageUrl && <img src={item.ImageUrl} alt={item.Institution} className={classes.img} />} */}
                <h3>{item.Institution}</h3>
                <p className={classes.Qualification}>{item.Qualification}</p>
                <p className={classes.Duration}>{item.Duration}</p>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default EducationSection