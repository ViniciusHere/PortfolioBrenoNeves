// Styles
import styles from '../styles/WorkCareLover.module.css';

// Components
import Header from '../components/Header';
import PagesTitle from '../components/PagesTitle';
import ResumeProject from '../components/ResumeProject';
import Screens from '../components/Screens';
import Form from '../components/Form';
import Footer from '../components/Footer';

// Hooks
import { useRef, useState, useEffect } from 'react';

// Libraries
import { motion } from 'framer-motion';

// Assets
import Cover from '../assets/workCareLover/Cover.png';
import Cover2 from '../assets/workCareLover/Cover2.png';
import Onboarding1 from '../assets/workCareLover/Onboarding1.png';
import Onboarding2 from '../assets/workCareLover/Onboarding2.png';
import Onboarding3 from '../assets/workCareLover/Onboarding3.png';
import Registration1 from '../assets/workCareLover/Registration1.png';
import Registration2 from '../assets/workCareLover/Registration2.png';
import Registration3 from '../assets/workCareLover/Registration3.png';
import Security1 from '../assets/workCareLover/Security1.png';
import Security2 from '../assets/workCareLover/Security2.png';
import Security3 from '../assets/workCareLover/Security3.png';
import Home1 from '../assets/workCareLover/Home1.png';
import Home2 from '../assets/workCareLover/Home2.png';
import Adopt1 from '../assets/workCareLover/Adopt1.png';
import Adopt2 from '../assets/workCareLover/Adopt2.png';
import Adopt3 from '../assets/workCareLover/Adopt3.png';
import NavBar1 from '../assets/workCareLover/NavBar1.png';
import NavBar2 from '../assets/workCareLover/NavBar2.png';
import NavBar3 from '../assets/workCareLover/NavBar3.png';
import NavBar4 from '../assets/workCareLover/NavBar4.png';
import NavBar from '../assets/workCareLover/NavBar.png';

// Data
import translate from '../translate.json';

const images = [Onboarding1, Onboarding2, Onboarding3, Registration1, Registration2, Registration3, Security1, Security2, Security3, Home1, Home2, Adopt1, Adopt2, Adopt3, NavBar1, NavBar2, NavBar3, NavBar4]

const WorkCareLover = () => {
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


    return (
        <div>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <PagesTitle
                title= {x ? 'WORK' : 'PROJETO'}
                span=' // '
                name='CARELOVER'
            />
            <ResumeProject
                banner={Cover}
                title='CareLover'
                titleResume= {x ? translate.workCareLover.titleResumeEN : translate.workCareLover.titleResumePT}
                titleLocation= {x ? 'Nova Serrana, Brazil' : 'Nova Serrana, Brasil'}
                titleData='2024.'
                button1='UX Design'
                button2='UI Design'
                button3={x ? 'Mobile App Design' : 'Design de aplicativos mobile' }
                banner2={Cover2}
                text1= {x ? translate.workCareLover.text1EN : translate.workCareLover.text1PT}
                text2= {x ? translate.workCareLover.text2EN : translate.workCareLover.text2PT}
                text3={x ? translate.workCareLover.text3EN : translate.workCareLover.text3PT}
                text4 = {x ? translate.workCareLover.text4EN : translate.workCareLover.text4PT}
                text5 = {x ? translate.workCareLover.text5EN : translate.workCareLover.text5PT}
            />

            <Screens
                screenTitle={x ? 'Onboarding' : 'Integração' }
                img1={Onboarding1}
                img2={Onboarding2}
                img3={Onboarding3}
                title1={x ? '1. Visualization of Stories' : '1. Visualização de Historias' }
                resume1= {x ? translate.workCareLover.screens.onboarding.resume1EN : translate.workCareLover.screens.onboarding.resume1PT}
                title2={x ? '2. Title and body text' : '2. Titulo e corpo do texto'}
                resume2= {x ? translate.workCareLover.screens.onboarding.resume2EN : translate.workCareLover.screens.onboarding.resume2PT}
                title3={x ? '3. Buttons' : '3. Botões' }
                resume3= {x ? translate.workCareLover.screens.onboarding.resume3EN : translate.workCareLover.screens.onboarding.resume3PT}
            />

            <Screens
                screenTitle= {x ? 'Registration' : 'Cadastro' }
                img1={Registration1}
                img2={Registration2}
                img3={Registration3}
                title1= '1. Logo'
                resume1= {x ? translate.workCareLover.screens.Registration.resume1EN : translate.workCareLover.screens.Registration.resume1PT }
                title2= {x ? '2. Title Register' : '2. Titulo do cadastro'}
                resume2= {x ? translate.workCareLover.screens.Registration.resume2EN : translate.workCareLover.screens.Registration.resume2PT }
                title3= {x ? '3. Forms' : '3. Formulário'}
                resume3= {x ? translate.workCareLover.screens.Registration.resume3EN : translate.workCareLover.screens.Registration.resume3PT }
                title4 = {x ? '4. Checkbox'  : '4. Caixa de seleção'}
                resume4 = {x ? translate.workCareLover.screens.Registration.resume4EN : translate.workCareLover.screens.Registration.resume4PT }
                title5 = {x ? '5. Button' : '5. Botão'}
                resume5 = {x ? translate.workCareLover.screens.Registration.resume5EN : translate.workCareLover.screens.Registration.resume5PT }
                title6 = {x ? '6. Wrong credential' : '6. Credenciais erradas'}
                resume6 = {x ? translate.workCareLover.screens.Registration.resume6EN : translate.workCareLover.screens.Registration.resume6PT }
            />

            <Screens
                screenTitle= {x ? 'Security step user experience' : 'Experiência do usuário na etapa de segurança'}
                img1={Security1}
                img2={Security2}
                img3={Security3}
                title1= {x ? '1. Title' : '1. Título'}
                resume1= {x ? translate.workCareLover.screens.Security.resume1EN : translate.workCareLover.screens.Security.resume1PT}
                title2= {x ? '2. Digits of the code' : '2. Dígitos do código'}
                resume2= {x ? translate.workCareLover.screens.Security.resume2EN : translate.workCareLover.screens.Security.resume2PT}
                title3= {x ? '3. Button' : '3. Botão'}
                resume3= {x ? translate.workCareLover.screens.Security.resume3EN : translate.workCareLover.screens.Security.resume3PT}
                title4 = {x ? '4. Checkbox' : '4. Caixa de seleção'}
                resume4 = {x ? translate.workCareLover.screens.Security.resume4EN : translate.workCareLover.screens.Security.resume4PT}
                title5 = {x ? '5. Button' : '5. Botão'}
                resume5 = {x ? translate.workCareLover.screens.Security.resume5EN : translate.workCareLover.screens.Security.resume5PT}
                title6 = {x ? '6. Wrong Credential' : '6. Credênciais erradas'}
                resume6 = {x ? translate.workCareLover.screens.Security.resume6EN : translate.workCareLover.screens.Security.resume6PT}
                title7 = {x ? '7. Wrong digit' : '7. Dígito errado'}
                resume7 = {x ? translate.workCareLover.screens.Security.resume7EN : translate.workCareLover.screens.Security.resume7PT}
                title8 = {x ? '8. Retries' : '8. Novas tentativas'}
                resume8 = {x ? translate.workCareLover.screens.Security.resume8EN : translate.workCareLover.screens.Security.resume8PT}
            />

            <Screens
                screenTitle={x ? 'Home' : 'Início'}
                img1={Home1}
                img2={Home2}
                title1={x ? '1. Greeting and avatar' : '1. Saudação e avatar'}
                resume1= {x ? translate.workCareLover.screens.home.resume1EN : translate.workCareLover.screens.home.resume1PT}
                title2={x ? '2. Search bar' : '2. Barra de pesquisa'}
                resume2= {x ? translate.workCareLover.screens.home.resume2EN : translate.workCareLover.screens.home.resume2PT}
                title3={x ? '3. Categories' : '3. Categorias'}
                resume3= {x ? translate.workCareLover.screens.home.resume3EN : translate.workCareLover.screens.home.resume3PT}
                title4 = '4. Blog'
                resume4 = {x ? translate.workCareLover.screens.home.resume4EN : translate.workCareLover.screens.home.resume4PT}
                subtitleTitle4= '4.1'
                subtitle4= {x ? translate.workCareLover.screens.home.subtitle4EN : translate.workCareLover.screens.home.subtitle4PT}
                title5 = {x ? '5. Visualization of animals for adoption' : '5. Visualização dos animais para adoção'}
                resume5 = {x ? translate.workCareLover.screens.home.resume5EN : translate.workCareLover.screens.home.resume5PT}
                subtitleTitle5= '5.1'
                subtitle5= {x ? translate.workCareLover.screens.home.subtitle5EN : translate.workCareLover.screens.home.subtitle5PT}
                title6 = {x ? '6. Visualization of donation campaigns' : '6. Visualização das campanhas de doação'}
                resume6 = {x ? translate.workCareLover.screens.home.resume6EN : translate.workCareLover.screens.home.resume6PT}
                subtitleTitle6= '6.1'
                subtitle6= {x ? translate.workCareLover.screens.home.subtitle6EN : translate.workCareLover.screens.home.subtitle6PT}
                title7 = {x ? '7. Navbar' : '7. Barra de navegação'}
                resume7 = {x ? translate.workCareLover.screens.home.resume7EN : translate.workCareLover.screens.home.resume7PT}
            />

            <Screens
                screenTitle= {x ? 'Adopt, Donate and Volunteer' : 'Adoção, doação e voluntariado'}
                img1={Adopt1}
                img2={Adopt2}
                img3={Adopt3}
                title1= {x ? 'Adopt screen' : 'Tela de adoção'}
                resume1= {x 
                ? <p><span style={{fontWeight:700}}>1. </span>{translate.workCareLover.screens.adoption.resume1.resume1EN} <br/>
                <span style={{fontWeight:700}}>2. </span>{translate.workCareLover.screens.adoption.resume1.resume2EN} <br/>
                <span style={{fontWeight:700}}>3. </span>{translate.workCareLover.screens.adoption.resume1.resume3EN} <br/>
                <span style={{fontWeight:700}}>4. </span>{translate.workCareLover.screens.adoption.resume1.resume4EN} <br/>
                <span style={{fontWeight:700}}>5. </span>{translate.workCareLover.screens.adoption.resume1.resume5EN} <br/>
                {translate.workCareLover.screens.adoption.resume1.resume6EN} <br/>
                </p> 
                : <p><span style={{fontWeight:700}}>1. </span>{translate.workCareLover.screens.adoption.resume1.resume1PT} <br/>
                <span style={{fontWeight:700}}>2. </span>{translate.workCareLover.screens.adoption.resume1.resume2PT} <br/>
                <span style={{fontWeight:700}}>3. </span>{translate.workCareLover.screens.adoption.resume1.resume3PT} <br/>
                <span style={{fontWeight:700}}>4. </span>{translate.workCareLover.screens.adoption.resume1.resume4PT} <br/>
                <span style={{fontWeight:700}}>5. </span>{translate.workCareLover.screens.adoption.resume1.resume5PT} <br/>
                {translate.workCareLover.screens.adoption.resume1.resume6PT} <br/>
                </p>}
                title2= {x ? 'Donate screen' : 'Tela de adoção'}
                resume2={x 
                    ? <p><span style={{fontWeight:700}}>1. </span>{translate.workCareLover.screens.adoption.resume2.resume1EN} <br/>
                    <span style={{fontWeight:700}}>2. </span>{translate.workCareLover.screens.adoption.resume2.resume2EN} <br/>
                    <span style={{fontWeight:700}}>3. </span>{translate.workCareLover.screens.adoption.resume2.resume3EN} <br/>
                    <span style={{fontWeight:700}}>4. </span>{translate.workCareLover.screens.adoption.resume2.resume4EN} <br/>
                    <span style={{fontWeight:700}}>5. </span>{translate.workCareLover.screens.adoption.resume2.resume5EN} <br/>
                    <span style={{fontWeight:700}}>5.1 </span>{translate.workCareLover.screens.adoption.resume2['resume5.5EN']}
                    </p> 
                    : <p><span style={{fontWeight:700}}>1. </span>{translate.workCareLover.screens.adoption.resume2.resume1PT} <br/>
                    <span style={{fontWeight:700}}>2. </span>{translate.workCareLover.screens.adoption.resume2.resume2PT} <br/>
                    <span style={{fontWeight:700}}>3. </span>{translate.workCareLover.screens.adoption.resume2.resume3PT} <br/>
                    <span style={{fontWeight:700}}>4. </span>{translate.workCareLover.screens.adoption.resume2.resume4PT} <br/>
                    <span style={{fontWeight:700}}>5. </span>{translate.workCareLover.screens.adoption.resume2.resume5PT} <br/>
                    <span style={{fontWeight:700}}>5.1 </span>{translate.workCareLover.screens.adoption.resume2['resume5.5PT']}
                    </p>}
                title3= {x ? 'Volunteer screen' : 'Tela de voluntariado'}
                resume3={x 
                    ? <p><span style={{fontWeight:700}}>1. </span>{translate.workCareLover.screens.adoption.resume3.resume1EN} <br/>
                    <span style={{fontWeight:700}}>2. </span>{translate.workCareLover.screens.adoption.resume3.resume2EN} <br/>
                    <span style={{fontWeight:700}}>3. </span>{translate.workCareLover.screens.adoption.resume3.resume3EN} <br/>
                    <span style={{fontWeight:700}}>4. </span>{translate.workCareLover.screens.adoption.resume3.resume4EN} <br/>
                    <span style={{fontWeight:700}}>5. </span>{translate.workCareLover.screens.adoption.resume3.resume5EN}
                    </p> 
                    : <p><span style={{fontWeight:700}}>1. </span>{translate.workCareLover.screens.adoption.resume3.resume1PT} <br/>
                    <span style={{fontWeight:700}}>2. </span>{translate.workCareLover.screens.adoption.resume3.resume2PT} <br/>
                    <span style={{fontWeight:700}}>3. </span>{translate.workCareLover.screens.adoption.resume3.resume3PT} <br/>
                    <span style={{fontWeight:700}}>4. </span>{translate.workCareLover.screens.adoption.resume3.resume4PT} <br/>
                    <span style={{fontWeight:700}}>5. </span>{translate.workCareLover.screens.adoption.resume3.resume5PT}
                    </p>}
            />

            <div className={styles.ScreenContainer}>
                <p className={styles.ContainerTitle}>NavBar</p>
                <div className={styles.ImgContainer}>
                    <img className={styles.NavBarImg} src={NavBar} alt="NavBar" />
                </div>
                <div className={styles.NavBarResumeContainer}>
                    <p className={styles.Text}><span className={styles.TextTitle}>1.</span>
                        {x ? translate.workCareLover.screens.navbar.text1EN : translate.workCareLover.screens.navbar.text1EP}   
                    </p>
                    <p className={styles.Text}><span className={styles.TextTitle}>2.</span>
                    {x ? translate.workCareLover.screens.navbar.text2EN : translate.workCareLover.screens.navbar.text2EP} 
                    </p>
                    <p className={styles.Text}><span className={styles.TextTitle}>3.</span>
                    {x ? translate.workCareLover.screens.navbar.text3EN : translate.workCareLover.screens.navbar.text3EP}
                    </p>
                    <p className={styles.Text}><span className={styles.TextTitle}>4.</span>
                    {x ? translate.workCareLover.screens.navbar.text4EN : translate.workCareLover.screens.navbar.text4EP} 
                    </p>
                </div>
            </div>
            <p className={styles.carouselText}>Overview of all screens</p>

            <motion.div className={styles.carousel} ref={carousel} whileTap={{ cursor: 'grabbing' }}>
                <motion.div className={styles.inner} drag="x" dragConstraints={{ right: 0, left: -width }}>
                    {images.map((image, index) => (
                        <motion.div className={styles.item} key={index}>
                            <img src={image} alt='' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className={styles.linkContainer}>
                <a href="#">Acess the HI-FI Prototype here</a>
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

export default WorkCareLover