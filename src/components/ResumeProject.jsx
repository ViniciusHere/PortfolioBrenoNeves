import styles from '../styles/ResumeProject.module.css'


const ResumeProject = ({banner, title, titleResume, titleLocation, titleData, button1, button2, button3, banner2, text1, text2, text3, text4, text5}) => {
    return(
        <div className={styles.Container}>
            <img className={styles.Cover} src={banner} alt="" />
            <div className={styles.ProjectContainer}>
                <div className={styles.ProjectDesc}>
                    <p className={styles.Title}>{title}</p>
                    <p className={styles.Resume}>
                        {titleResume}
                    </p>
                    <p className={styles.Location}>{titleLocation}</p>
                    <p className={styles.Date}>{titleData}</p>
                </div>
                <div className={styles.buttonContainer}>
                    {button1 && <button className={styles.Button}>{button1}</button>}
                    {button2 && <button className={styles.Button}>{button2}</button>}
                    {button3 && <button className={styles.Button}>{button3}</button>}
                </div>
            </div>
            <img className={styles.Models} src={banner2} alt="" />
            <div className={styles.TextContainer}>
                {text1 && <p className={styles.Text}>{text1}</p>}
                {text2 && <p className={styles.Text}>{text2}</p>}
                {text3 && <p className={styles.Text}>{text3}</p>}
                {text4 && <p className={styles.Text}>{text4}</p>}
                {text5 && <p className={styles.Text}>{text5}</p>}
            </div>
            
        </div>
    )
}

export default ResumeProject