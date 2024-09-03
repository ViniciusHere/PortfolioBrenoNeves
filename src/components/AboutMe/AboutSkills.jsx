import styles from '../../styles/AboutMe/AboutSkills.module.css'

const AboutSkills = ({title, resume}) => {
    return(
        <div className={styles.Container}>
            <h3 className={styles.Title}>{title}</h3>
            <p className={styles.Resume}>{resume}</p>
        </div>
    )
}

export default AboutSkills