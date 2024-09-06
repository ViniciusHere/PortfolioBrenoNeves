// Styles
import styles from '../styles/Home/Home.module.css'

// Components
import Header from "../components/Header"
import HomeProject from '../components/Home/HomeProject';
import Footer from '../components/Footer';

// Hooks
import { useState } from "react";
import { Link } from 'react-router-dom'

// Assets
import ArrowMain from '../assets/main/ArrowMain.svg' 
import MainLogo from '../assets/main/MainLogo.svg' 
import CareLover from '../assets/main/CareLover.png' 
import Nami from '../assets/main/Nami.png' 
import Agilease from '../assets/main/Agilease.png'
import ArrowRight from '../assets/main/ArrowRight.svg' 
import Heart from '../assets/main/Heart.svg' 
import Lupa from '../assets/main/Lupa.svg' 
import Pen from '../assets/main/Pen.svg' 

// data
import translation from '../translate.json'

// Code

const Home = () => {

    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }

    return(
        <div>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <main>
                <div className={styles.Main__Header}>
                    <img className={styles.MainLogo} src={MainLogo} alt="" />
                        {x 
                        ? <p className={styles['Main__Header-p']}>
                            I'm a <span className={styles['Main__Header-p-span']}>UI/UX Designer</span> focused on developing the <span className={styles['Main__Header-p-span']}>best experience</span> and the <span className={styles['Main__Header-p-span']}>best design</span>  for the <span className={styles['Main__Header-p-span']}>right user</span>.
                        </p> 
                        : <p className={styles['Main__Header-p']}>
                            Eu sou um <span className={styles['Main__Header-p-span']}>UI/UX Designer</span> com foco em desenhar a <span className={styles['Main__Header-p-span']}>melhor experiência</span> e o <span className={styles['Main__Header-p-span']}>melhor design</span> para o <span className={styles['Main__Header-p-span']}>usuário certo.</span>
                        </p>}
                    <div  className={styles['HomeMain__Header-Buttons']}>
                        <button className={styles['HomeMain__Header-Button']}>UX Design</button>
                        <button className={styles['HomeMain__Header-Button']}>UI Design</button>
                        <button className={styles['HomeMain__Header-Button']}>Design Thinking</button>
                        <button className={styles['HomeMain__Header-Button']}>Scrum</button>
                    </div>
                </div> 
                <div className={styles.ArrowMainSeparation}>
                    <img className={styles.ArrowMain} src={ArrowMain} alt="" />
                </div>
                <HomeProject
                    title = 'CareLover'
                    date = {x ? 'Apr 2024 - Apr 2024' : 'Abr 2024 - Abr 2024'}
                    text = {x ? translation.home.Project.CareLoverResumeEN : translation.home.Project.CareLoverResumeBR}
                    button1 = 'UX Design'
                    button2 = 'UI Design'
                    button3 = 'Mobile App Design'
                    view = {{
                        style: {color: '#E71B5A'},
                        content: x ? "VIEW CASE HERE" : "VEJA O PROJETO AQUI",
                        to: '/portfolioBrenoNeves/WorkCareLover'
                    }} 
                    img = {CareLover}
                ></HomeProject>
                <HomeProject
                    title = 'Agilease'
                    date= 'Mar 2024 - Mar 2024'
                    text = {x ? translation.home.Project.AgileaseResumeEN : translation.home.Project.AgileaseResumeBR}
                    button1 = 'UI Design'
                    button2 = 'Website Design'
                    view = {{
                        style: {color: '#E71B5A'},
                        content: x ? "VIEW CASE HERE" : "VEJA O PROJETO AQUI",
                        to: '/portfolioBrenoNeves/WorkAgilease'
                    }}
                    img = {Agilease}
                ></HomeProject>
                <HomeProject
                    title = 'Nami'
                    date= {x ? 'Apr 2023 - Jun 2023' : 'Abr 2023 - Jun 2023'}
                    text = {x ? translation.home.Project.NamiResumeEN : translation.home.Project.NamiResumeBR}
                    button1 = 'UX Design'
                    button2 = 'UI Design'
                    button3 = 'Mobile App Design'
                    view = {{
                        style: {color: '#E71B5A'},
                        content: x ? "VIEW CASE HERE" : "VEJA O PROJETO AQUI",
                        to: '/portfolioBrenoNeves/WorkNami'
                    }}
                    img = {Nami}
              ></HomeProject>
                <div className={styles.HomeFooterBox}>
                    <div className={styles.HomeFooter__Link}>
                        <a className={styles['HomeFooter__Link-a']} href="#">{x ? 'SEE OTHER WORKS' : 'VEJA OUTROS TRABALHOS'}</a> 
                        <span>
                            <img className={styles['HomeFooter__Link-span-img']} src={ArrowRight} alt=""/>
                        </span>
                    </div>
                    <div className={styles.HomeFooter__Title}>
                        <p className={styles['HomeFooter__Title-p']}>{x ? 'What I Do?' : 'O que eu faço?'}</p>
                    </div>
                    <div className={styles.HomeFooter__Sections}>
                        <section className={styles.HomeFooter__Section}>
                            <img className={styles['HomeFooter__Section-img']} src={Heart} alt="" />
                            <h3 className={styles['HomeFooter__Section-h3']}>Design Thinking</h3>
                            <p className={styles.TextCard1}>{x ? translation.home.cards.text1EN : translation.home.cards.text1BR}</p>
                        </section>
                        <section className={styles.HomeFooter__Section}>
                            <img className={styles['HomeFooter__Section-img']} src={Lupa} alt="" />
                            <h3 className={styles['HomeFooter__Section-h3']}>UX Design</h3>
                            <p className={styles.TextCard2}>{x ? translation.home.cards.text2EN : translation.home.cards.text2BR}</p>
                        </section>
                        <section className={styles.HomeFooter__Section}>
                            <img className={styles['HomeFooter__Section-img']} src={Pen} alt="" />
                            <h3 className={styles['HomeFooter__Section-h3']}>UI Design</h3>
                            <p className={styles.TextCard3}>
                            {x ? translation.home.cards.text3EN : translation.home.cards.text3BR}
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer
                work = {x ? 'Work' : 'Trabalhos'}
                about = {x ? 'About Me' : 'Sobre mim'}
                contact = {x ? 'Contact' : 'Contato'}
            ></Footer>
        </div>
    )
}
export default Home