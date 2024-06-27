import classes from './NavBar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
                <a href='#Home' >
                <FontAwesomeIcon icon={faHouse} />
                Home
                </a>
                <a href='#About'>
                <FontAwesomeIcon icon={faUser} /> About
                </a>
                <a href='#Projects'>
                <FontAwesomeIcon icon={faCode} />   Projects
                </a>
                <a href='#Contact'>
                <FontAwesomeIcon icon={faEnvelope} />   Contact
                </a>
            
        </nav>
      </header>
    </div>
    )
}