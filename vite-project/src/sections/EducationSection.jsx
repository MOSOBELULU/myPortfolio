import { educationData } from "../Components/DummyData";
import classes from './EducationSection.module.css';

function EducationSection() {
    return (
        <div className={classes.EducationSection}>
            <h1 className={classes.EducationHeading}>Education</h1>
            <div className={classes.SectionContainer}>
                <div className={classes.ImageContainer}>
                    <img className={classes.img} src="/images/Screenshot_20240206_192022_com.gbox.android.jpg" alt="Education" />
                </div>
                <ul className={classes.EducationList}>
                    {educationData.map((item, index) => (
                        <li key={index} className={classes.EducationItem}>
                            <div>
                                <h3>{item.Institution}</h3>
                                <p className={classes.Qualification}>{item.Qualification}</p>
                                <p className={classes.Duration}>{item.Duration}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EducationSection;
