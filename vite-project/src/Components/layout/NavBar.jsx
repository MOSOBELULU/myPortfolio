import classes from './NavBar.module.css'


export default function NavBar() {
    return (
        <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
      </header>
    </div>
    )
}