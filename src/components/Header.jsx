import styles from '../styles/Header.module.css'
import smLogo from '../assets/header/smLogo.svg'
import WordLanguage from '../assets/header/WordLanguage.svg'
import PipeLine from '../assets/header/PipeLine.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = ({mudanca, mud}) => {

    const [menu, setMenu] = useState('')

    function click(){
        if(menu === ''){
            setMenu('MenuOptions')
        }else {
            setMenu('')
        }
    }

    return(
        <div className={styles.Header}>
            <div className={styles.Header__Content}>
                <Link to = '/portfolioBrenoNeves'><img className={styles.Logo} src={smLogo} alt="" /></Link>
                
                <nav className={styles.Header__Links}>
                <div className={styles.MenuContainer}>
                    <div onClick={() => click()} className={styles.MenuIcon}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className={`${styles.menu} ${menu === 'MenuOptions' ? styles.menuVisible : ''}`}>
                        <a href="#">{mud ? 'Work' : 'Projetos'}</a>
                        <a href="#">{mud ? 'About Me' : 'Sobre Mim'}</a>
                        <a href="#">{mud ? 'Contact' : 'Contato'}</a>
                        <select onChange={mudanca}>
                                <option>English</option>
                                <option>Português</option>
                        </select>
                    </div>
                </div>
                    <ul className={styles['Header__Links-ul']}>
                        <li className={styles['Header__Links-ul-li']}>
                            <Link className={styles['Header__Links-ul-li-a']} to = '/portfolioBrenoNeves/Work'>{mud ? 'Work' : 'Projetos'}</Link>
                        </li>
                        <li className={styles['Header__Links-ul-li']}>
                            <Link className={styles['Header__Links-ul-li-a']} to = '/portfolioBrenoNeves/AboutMe'>{mud ? 'About Me' : 'Sobre Mim'}</Link>
                        </li>
                        <li className={styles['Header__Links-ul-li']}>
                            <Link className={styles['Header__Links-ul-li-a']} to = '/portfolioBrenoNeves/Contact'>{mud ? 'Contact' : 'Contato'}</Link>
                        </li>
                        <li className={styles['Header__Links-ul-li']}>
                            <img src={PipeLine} alt="" />
                        </li>
                        <li className={styles['Header__Links-ul-li']}>
                            <img className={styles.GlobalImg} src={WordLanguage} alt="Imagem de um globo" />
                            <select onChange={mudanca}>
                                <option>English</option>
                                <option>Português</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header