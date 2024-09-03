import styles from '../../styles/Home/HomeProject.module.css'
import { Link } from 'react-router-dom'


const HomeProject = ({title, date,  text, button1, button2, button3, view, img}) => {
    return(
        <div className={styles.MainWorkBox}>
            <div className={styles.MainWorkContent}>
                <div className={styles.MainWorkContent__about}>
                    <div className={styles.MainWorkContent__Title}>
                        <h2 className={styles['MainWorkContent__Title-h2']}>{title}</h2>
                        <p className={styles['MainWorkContent__Data']}>{date}</p>
                    </div>
                    <div className={styles.MainWorkContent__Desc}>
                        <p className={styles['MainWorkContent__Desc-p']}>
                            {text}
                        </p>
                        <div className={styles.MainWorkContent__buttons}>
                            {button1 && <button className={styles['MainWorkContent__buttons-button']}>{button1}</button>}
                            {button2 && <button className={styles['MainWorkContent__buttons-button']}>{button2}</button>}
                            {button3 && <button className={styles['MainWorkContent__buttons-button']}>{button3}</button>}
                        </div>
                    </div>
                    <div className={styles.MainWorkContent__link}>
                        <div className={styles.MainWorkContent__link}>
                            <Link className={styles['MainWorkContent__link-a']} style={view.style} to={view.to}>{view.content}</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.MainWorkContent__img}>
                    <img className={styles['MainWorkContent__img-img']} src={img} alt="" />
                </div>
            </div>
        </div>
    )
    
}

export default HomeProject