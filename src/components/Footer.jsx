import styles from '../styles/Footer.module.css'
import smLogo from '../assets/footer/smLogo.svg'

const Footer = ({work, about, contact}) => {
    return(
        <>
            <div className={styles.Divisor}></div>
            <div className={styles.Footer}>
                <div className={styles.Footer__Content}>
                    <ul className={styles.Footer__Content__ul}>
                        <li className={styles['Footer__Content-ul-li']}>
                            <img className={styles.Logo} src={smLogo} alt="" />
                        </li>
                        <li className={styles['Footer__Content-ul-li']}>
                            <div className={styles.Footer__info}>
                                <div className={styles.Footer_Icons}>                             
                                    <a className={styles['Footer_Icons-a']} target='_blank' href="mailto:brenopazi10@gmail.com">
                                        <i className="fa-regular fa-envelope"></i>
                                    </a>
                                    <a className={styles['Footer_Icons-a']} target='_blank' href="https://br.linkedin.com/in/brenneves">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a className={styles['Footer_Icons-a']} target='_blank' href="https://www.instagram.com/brenonevesdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a> 
                                </div>
                                <p>2024 © Breno Neves</p> 
                            </div>
                        </li>
                        <li className={styles['Footer__Content-ul-li']}>
                            <ul className={styles.Footer__nav}>
                                <li className={styles['Footer__Content-ul-li']}>{work}</li>
                                <li className={styles['Footer__Content-ul-li']}>{about}</li>
                                <li className={styles['Footer__Content-ul-li']}>{contact}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer