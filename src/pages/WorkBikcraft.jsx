// components
import Header from '../components/Header'
import PagesTitle from '../components/PagesTitle'
import ResumeProject from '../components/ResumeProject'
import Form from '../components/Form'
import Footer from '../components/Footer'

// assets
import cover from '../assets/WorkBikcraft/Banner.png'
import cover2 from '../assets/WorkBikcraft/Banner2.png'
import HomePage from '../assets/WorkBikcraft/HomePage.png'
import Bycicles from '../assets/WorkBikcraft/Bycicles.png'
import Insurance from '../assets/WorkBikcraft/Insurance.png'
import Contact from '../assets/WorkBikcraft/Contact.png'
import Terms from '../assets/WorkBikcraft/Terms.png'
import carousel1 from '../assets/WorkBikcraft/carousel1.png'
import carousel2 from '../assets/WorkBikcraft/carousel2.png'
import carousel3 from '../assets/WorkBikcraft/carousel3.png'
import ArrowRight from '../assets/WorkBikcraft/ArrowRight.svg'

// hooks
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import translate from '../translate.json'

// styles
import styles from '../styles/WorkBikcraft.module.css'

// code

const images = [carousel1, carousel2, carousel3]

const WorkBikcraft = () => {

    const carousel = useRef(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
            }
        }
        
        handleResize()
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }

    return(
        <div>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <PagesTitle
            title = {x ? 'WORK' : 'PROJETO'}
            span = ' // '
            name = 'BIKCRAFT'
            ></PagesTitle>

            <ResumeProject
             banner = {cover}
             title = 'Bikcraft'
             titleResume = {x ? translate.workBikcraft.titleResumeEN : translate.workBikcraft.titleResumePT}
             titleLocation = 'Rio de Janeiro, Brazil'
             titleData = '2024.'
             button1 = 'UI Design'
             button2 = 'Website Design'
             banner2 = {cover2}
             text1 = {x ? translate.workAgilease.text1EN : translate.workAgilease.text1PT}
             text2 = {x ? translate.workAgilease.text2EN : translate.workAgilease.text2PT}
            ></ResumeProject>
            
            <p className={styles.ProjectTitle}>{x ? 'Home Page' : 'Pagina Inícial'}</p>
            
            <div className= {styles.ImgContainer}>
                <img src={HomePage} alt="" />
            </div>
            
            <p className={styles.ProjectResume}>{x ? translate.workBikcraft.homeResumeEN : translate.workBikcraft.homeResumePT}</p>
    
            <p className={styles.ProjectTitle}>{x ? 'Bicycles' : 'Bicicletas'}</p>

            <div className= {styles.ImgContainer}>
                <img src={Bycicles} alt="" />
            </div>
            <p className={styles.ProjectResume}>{x ? translate.workBikcraft.bicycleResumeEN : translate.workBikcraft.bicycleResumePT}</p>

            <p className={styles.ProjectTitle}>{x ? 'Bycicles Page' : 'Pagina das bicicletas'}</p>
            <motion.div className={styles.carousel} ref={carousel} whileTap={{ cursor: 'grabbing' }}>
                <motion.div className={styles.inner} drag="x" dragConstraints={{ right: 0, left: -width }}>
                    {images.map((image, index) => (
                        <motion.div className={styles.item} key={index}>
                            <img src={image} alt='' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <p className={styles.ProjectResume}>{x ? translate.workBikcraft.bicyclesPageResumeEN : translate.workBikcraft.bicyclesPageResumePT}</p>

            <p className={styles.ProjectTitle}>{x ? 'Insurance' : 'Seguro'}</p>

            <div className= {styles.ImgContainer}>
                <img src={Insurance} alt="" />
            </div>
           <p className={styles.ProjectResume}>{x ? translate.workBikcraft.InsuranceResumeEN : translate.workBikcraft.InsuranceResumePT}</p>

            <p className={styles.ProjectTitle}>{x ? 'Contact' : 'Contato'}</p>
        
            <div className= {styles.ImgContainer}>
                <img src={Contact} alt="" />
            </div>
           
            <p className={styles.ProjectResume}>{x ? translate.workBikcraft.ContactResumeEN : translate.workBikcraft.ContactResumePT}</p>

            <p className={styles.ProjectTitle}>{x ? 'Terms and Conditions' : 'Termos e condições'}</p>

            <div className= {styles.ImgContainer}>
                <img src={Terms} alt="" />
            </div>

            <p className={styles.ProjectResume}>{x ? translate.workBikcraft.TermResumeEN : translate.workBikcraft.TermResumePT}</p>
            
            <div className={styles.linkContainer}>
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

export default WorkBikcraft
