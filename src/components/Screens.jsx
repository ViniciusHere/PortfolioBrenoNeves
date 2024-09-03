import styles from '../styles/Screens.module.css'

const Screens = ({screenTitle, img1, img2, img3, img4, title1, resume1, title2, resume2, title3, resume3, title4, resume4, subtitleTitle4, subtitle4, title5, resume5, subtitleTitle5, subtitle5, title6, resume6,subtitleTitle6, subtitle6, title7, resume7, title8, resume8}) => {
    return(
        <div className={styles.Container}>
            <p className={styles.Title}>{screenTitle}</p>
            <div className={styles.ImgContainer}>
                {img1 && <img className={styles.Img} src={img1} alt="" />}
                {img2 && <img className={styles.Img} src={img2} alt="" />}
                {img3 && <img className={styles.Img} src={img3} alt="" />}
                {img4 && <img className={styles.Img} src={img4} alt="" />}
            </div>
            <div className={styles.ResumeContainer}>
                {title1 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title1}</span>
                    {resume1}
                </p>}

                {title2 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title2}</span>
                    {resume2}
                </p>}
                
                {title3 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title3}</span>
                    {resume3}
                </p>}
                
                {title4 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title4}</span>
                    {resume4} <br />
                    <span style={{fontWeight: 700}}>{subtitleTitle4}</span> {subtitle4}
                </p>}
                
                {title5 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title5}</span>
                    {resume5} <br />
                    <span style={{fontWeight: 700}}>{subtitleTitle5}</span> {subtitle5}
                </p>}
                
                {title6 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title6}</span>
                    {resume6} <br />
                    <span style={{fontWeight: 700}}>{subtitleTitle6}</span> {subtitle6}
                </p>}
                
                {title7 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title7}</span>
                    {resume7}
                </p>}
                
                {title8 && 
                <p className={styles.ResumeText}>
                    <span className={styles.TextTitle}>{title8}</span>
                    {resume8}
                </p>}
                
            </div>
        </div>
    )
}

export default Screens