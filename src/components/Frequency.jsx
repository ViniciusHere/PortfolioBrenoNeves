import styles from '../styles/Frequency.module.css'

const Frequency = ({img, text}) => {
    return(
        <section className={styles.Container}>
            <div className={styles.ImgContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.line}></div>
            <div className={styles.TextContainer}>
                <p className={styles.Text}>
                    {text}
                </p>
                <hr className={styles.Divisor} />
            </div>
        </section>
    )
}

export default Frequency