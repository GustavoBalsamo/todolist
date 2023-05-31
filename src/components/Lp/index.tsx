import styles from './index.module.css'
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom'
export const Lp = () => {
    return (
        <section className={styles.sectionContainer}>
            <article className={styles.titleContainer}>
                <h1 className={styles.title}>ToDo List</h1>
            </article>
            <Link to='/to-do'><img className={styles.imgLP} src={banner} alt="Logo" /></Link>
        </section>
    )
}