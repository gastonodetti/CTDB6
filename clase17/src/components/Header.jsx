import styles from "../styles/header.module.css"
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header className={styles.header}>
      <Link className={styles.button} to='/'>Inicio</Link>
    </header>
  )
}
export default Header;