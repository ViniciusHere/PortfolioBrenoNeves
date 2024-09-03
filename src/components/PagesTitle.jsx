import styles from '../styles/PagesTitle.module.css' 

const PagesTitle = ({title, span, name}) => {
    return(
        <div className={styles.TitleContainer}>
            <p className={styles.Title}>{title}<span className={styles.TitleSpan}>{span}</span>{name}</p>
        </div>
    )
}

export default PagesTitle