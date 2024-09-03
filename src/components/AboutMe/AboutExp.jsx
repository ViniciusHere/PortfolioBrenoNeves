import styles from '../../styles/AboutMe/AboutExp.module.css'

const AboutExp = ({resume}) => {
    return(
        <div className={styles.Container}>
            <h3 className={styles.Title}>UI/UX Designer <span className={styles.TitleSpan}>— Freelancer</span></h3>
            <p className={styles.Data}>2024 — Present</p>
            <p className={styles.Resume}>{resume}</p>
        </div>
    )
}


export default AboutExp