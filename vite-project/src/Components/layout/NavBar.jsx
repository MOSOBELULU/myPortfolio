import classes from './NavBar.module.css'


export default function NavBar() {
    return (
        <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
                <a href='#Home'>
                    Home
                </a>
                <a href='#About'>
                    About
                </a>
                <a href='#Projects'>
                    Projects
                </a>
                <a href='Contact'>
                    Contact
                </a>
            
        </nav>
      </header>
    </div>
    )
}