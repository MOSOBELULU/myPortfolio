import { educationData } from '../Components/DummyData';
import classes from './EducationSection.module.css';

function EducationSection() {
    return (
        <div className={classes.EducationSection}>
            <h1 className={classes.EducationHeading}>Education</h1>
            <div className={classes.FlipCard}>
                <div className={classes.FlipCardInner}>
                    <div className={classes.FlipCardFront}>
                        <img className={classes.img} src="/images/Screenshot_20240206_192022_com.gbox.android.jpg" alt="Education" />
                    </div>
                    <div className={classes.FlipCardBack}>
                        <ul className={classes.EducationContent}>
                            {educationData.map((item, index) => (
                                <li key={index}>
                                    <h3>{item.Institution}</h3>
                                    <p className={classes.Qualification}>{item.Qualification}</p>
                                    <p className={classes.Duration}>{item.Duration}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationSection;
