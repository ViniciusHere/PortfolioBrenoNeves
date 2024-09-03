// componentes
import Header from '../components/Header'
import Footer from '../components/Footer'
import PagesTitle from '../components/PagesTitle'
import ResumeProject from '../components/ResumeProject'
import Form from '../components/Form'

// assets
import cover from '../assets/workAgilease/Banner.png'
import cover2 from '../assets/workAgilease/Banner2.png'
import ArrowRight from '../assets/main/ArrowRight.svg'
import site from '../assets/workAgilease/site.png'

// hooks
import { useState, useEffect } from 'react'
import translate from '../translate.json'

// styles
import styles from '../styles/WorkAgilease.module.css'

// code

const WorkAgilease = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }


    return(
        <div className={styles.Container}>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <PagesTitle
                title = {x ? 'WORK' : 'PROJETO'}
                span = ' // '
                name = 'AGILEASE'
            ></PagesTitle>
            <ResumeProject
                banner = {cover}
                title = 'Agilease'
                titleResume = {x ? translate.workAgilease.titleResumeEN : translate.workAgilease.titleResumePT}
                titleLocation = 'Nova Serrana, Brazil'
                titleData = '2024.'
                button1 = {x ? 'UI Design' : 'Designer UI'}
                button2 = 'Website Design'
                banner2 = {cover2}
                text1 = {x ? translate.workAgilease.text1EN : translate.workAgilease.text1PT}
                text2 = {x ? translate.workAgilease.text2EN : translate.workAgilease.text2PT}
            ></ResumeProject>
            <div className={styles.siteContainer}>
                <img src={site} alt="" />
            </div>
            <div className={styles.link}>
                <a href="#">Acess the Hi-Fi Prototype here</a>
                <img src={ArrowRight} alt="" />
            </div>
            <Form
                text1 = {x ? 'Want to get in touch ?' : 'Quer entrar em contato ?'}
                text2 = {x ? 'Drop me a line' : 'Me mande um e-mail'}
                name = {x ? 'Name' : 'Nome'}
                email = {x ? 'Email address' : 'Email'}
                message= {x ? 'Message' : 'Mensagem'}
                botao = {x ? 'Send' : 'Enviar'}
            ></Form>
            <Footer
                work = {x ? 'Work' : 'Projetos'}
                about = {x ? 'About Me' : 'Sobre mim'}
                contact = {x ? 'Contact' : 'Contato'}
            ></Footer>
        </div>
    )
}

export default WorkAgilease