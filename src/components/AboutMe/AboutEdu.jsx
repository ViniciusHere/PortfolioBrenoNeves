import styles from '../../styles/AboutMe/AboutEdu.module.css'

const AboutEdu = ({training, date, formation, local}) => {
    return(
        <div className={styles.Container}>
            <div className={styles.HeaderContainer}>
                <p className={styles.Training}>{training}</p>
                <p className={styles.Date}>{date}</p>
            </div>
            <h2 className={styles.Title}>{formation}</h2>
            <p className={styles.Local}>{local}</p>
        </div>
    )
}

export default AboutEdu
