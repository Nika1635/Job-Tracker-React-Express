import styles from "./navbar.module.css"
import { Link } from "react-router"

export default function Navbar(){
    return (
        <div className={styles.navHero}>
            <h1>Job Tracker</h1>
            <nav className={styles.navbar}>
                <ul>
                    <Link to='/' className={styles.navItem}>Home</Link>
                    <Link to='/jobs' className={styles.navItem}>Jobs</Link>
                    <Link></Link>
                </ul>
            </nav>
        </div>
    )
}