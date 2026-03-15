import styles from "./navbar.module.css"
import { Link } from "react-router"

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <h1>Job Tracker</h1>
            <ul>
                <Link to='/'>Home</Link>
                <Link></Link>
                <Link></Link>
            </ul>
        </nav>
    )
}