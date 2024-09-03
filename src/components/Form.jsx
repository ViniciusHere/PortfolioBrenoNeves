import styles from '../styles/Form.module.css'


const Form = ({text1, text2, name, email, message, botao}) => {


    return(
        <div>
            <div className={styles.InviteContainer}>
                <p className={styles.InviteFirst}>{text1}</p> 
                <p className={styles.InviteSecond}>{text2}</p>
            </div>
            <div className={styles.MainContainer}>
                <div className={styles.ContactIcons}>
                    <div className={styles.IconsMsg}>
                        <a target='_blank' href="mailto:brenopazi10@gmail.com"><i className="fa-regular fa-envelope"></i></a> 
                        <p className={styles.IconText}>brenopazi10@gmail.com</p>
                    </div>
                    <div className={styles.IconsLink}>
                        <a target='_blank' href="https://br.linkedin.com/in/brenneves"><i className="fa-brands fa-linkedin-in"></i></a> 
                        <p className={styles.IconText}>linkedin.com/in/brenneves/</p>
                    </div>
                    <div className={styles.IconsInst}>
                        <a target='_blank' href="https://www.instagram.com/brenonevesdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa-brands fa-instagram"></i></a> 
                        <p className={styles.IconText}>@brenonevesdesign</p>
                    </div>
                </div>
                <div className={styles.FormContainer}>
                    <form action="https://formsubmit.co/17f31fbd6d8aaf9a9e68de5d3ca9392c" method="POST" className={styles.Form}>
                    <input type="hidden" name="_next" value='http://localhost:5173/Contact'></input>
                        <div className={styles.FormInfo}>
                            <div className={styles.InfoContainer}>
                                <label className={styles.FormLabel}>{name}</label>
                                <input id="name" name="name" className={styles.FormInput} type="text" placeholder="Enter your name" />
                            </div>
                            <div className={styles.InfoContainer}>
                                <label className={styles.FormLabel}>{email}</label>
                                <input id="email" type='email' name="email" className={styles.FormInput} placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className={styles.InfoContainerMsg}>
                            <label className={styles.FormLabel}>{message}</label>
                            <input id="message" name='message' className={styles.FormInputMsg} type="text" placeholder="Enter your message" />
                        </div>
                        <button className={styles.FormButton} type="submit" >{botao}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form