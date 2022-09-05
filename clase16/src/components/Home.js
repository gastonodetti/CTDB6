import { Link, Outlet } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div>
            <ul className={styles.list}>
                <li><Link to="/"><h2>Home</h2></Link></li>
                <li><Link to="/cats"><h2>Cats</h2></Link></li>
                <li><Link to="/dogs"><h2>Dogs</h2></Link></li>
            </ul>
        <Outlet />
        </div>
    )
}

export default Home