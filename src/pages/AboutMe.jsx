// components
import AboutExp from '../components/AboutMe/AboutExp'
import AboutSkills from '../components/AboutMe/AboutSkills'
import AboutEdu from '../components/AboutMe/AboutEdu'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PagesTitle from '../components/PagesTitle'

// styles
import styles from '../styles/AboutMe/AboutMe.module.css'

// assets
import Arc from '../assets/Breno.jpg'

// hooks
import { useState, useEffect } from 'react'
import translate from '../translate.json'

// code

const AboutMe = () => {


    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <PagesTitle
            title = {x ? 'About Me' : 'Sobre Mim' }
            span = '.'
            ></PagesTitle>
            <div className={styles.Profile}>
                <img className={styles.ProfileImg} src={Arc} alt="" />
                <div className={styles.ProfileText}>
                    <h1 className={styles.ProfileName}>{x ? translate.aboutme.profile.nameEN : translate.aboutme.profile.namePT}</h1>
                    <p className={styles.ProfileResume}>
                        {x ? translate.aboutme.profile.resumeEN : translate.aboutme.profile.resumePT}
                    </p>
                </div>
            </div>
            <div>
                
            </div>
            <div className={styles.MainContainer}>
                <div className={styles.LeftContainer}>
                    <div className={styles.Experience}>
                        <h2 className={styles.TitleExp}>{x ? 'EXPERIENCE' : 'EXPERIÊNCIA'}</h2>
                        <div className={styles.ExpDesc}>
                            <AboutExp 
                            resume = {x ? translate.aboutme.experience['1EN'] : translate.aboutme.experience['1PT']}
                            ></AboutExp>
                            <AboutExp
                            resume = {x ? translate.aboutme.experience['2EN'] : translate.aboutme.experience['2PT']}
                            ></AboutExp>
                            <AboutExp
                            resume = {x ? translate.aboutme.experience['3EN'] : translate.aboutme.experience['3PT']}
                            ></AboutExp>
                        </div>
                    </div>
                    <div className={styles.Skills}>
                        <h2 className={styles.TitleSkil}>{x ? 'SKILL' : 'HABILIDADES'}</h2>
                        <div className={styles.SkillsDesc}>
                            <AboutSkills
                            title = {x ? translate.aboutme.skills.titles['1EN'] : translate.aboutme.skills.titles['1PT']}
                            resume = {x ? translate.aboutme.skills.resumes['1EN'] : translate.aboutme.skills.resumes['1PT']}
                            ></AboutSkills>
                            <AboutSkills
                            title = {x ? translate.aboutme.skills.titles['2EN'] : translate.aboutme.skills.titles['2PT']}
                            resume = {x ? translate.aboutme.skills.resumes['2EN'] : translate.aboutme.skills.resumes['2PT']}
                            ></AboutSkills>
                            <AboutSkills
                            title = {x ? translate.aboutme.skills.titles['3EN'] : translate.aboutme.skills.titles['3PT']}
                            resume = {x ? translate.aboutme.skills.resumes['3EN'] : translate.aboutme.skills.resumes['3PT']}
                            ></AboutSkills>
                            <AboutSkills
                            title = {x ? translate.aboutme.skills.titles['4EN'] : translate.aboutme.skills.titles['4PT']}
                            resume = {x ? translate.aboutme.skills.resumes['4EN'] : translate.aboutme.skills.resumes['4PT']}
                            ></AboutSkills>
                            <AboutSkills
                            title = {x ? translate.aboutme.skills.titles['5EN'] : translate.aboutme.skills.titles['5PT']}
                            resume = {x ? translate.aboutme.skills.resumes['5EN'] : translate.aboutme.skills.resumes['5PT']}
                            ></AboutSkills>
                        </div>
                    </div>
                </div>
                <div className={styles.Divisor}></div>
                <div className={styles.RightContainer}>
                    <div className={styles.EduContainer}>
                        <h2 className={styles.TitleEdu}>{x ? 'EDUCATION' : 'FORMAÇÃO'}</h2>
                        <div className={styles.EduDesc}>
                            <AboutEdu
                            training={x ? 'GRADUATION' : 'GRADUAÇÃO'}
                            date = '2024-2025'
                            formation= {x ? 'Graphic Design' : 'Designer Gráfico'}
                            local= 'UNA (Centro Universitário UNA)'
                            ></AboutEdu>
                            <AboutEdu
                            training={x ? 'TECHNICAL DEGREE' : 'GRAU TÉCNICO'}
                            date = '2023-2024'
                            formation= {x ? 'UI/UX Design' : 'Designer UI/UX'}
                            local= 'EBAC (Escola Britânica de Arte Criativas)'
                            ></AboutEdu>
                            <AboutEdu
                            training={x ? 'COURSE' : 'CURSO'}
                            date = '2023'
                            formation= {x ? 'UI Design' : 'Designer UI'}
                            local= 'Origamid'
                            ></AboutEdu>
                            <AboutEdu
                            training={x ? 'COURSE' : 'CURSO'}
                            date = '2022'
                            formation= {x ? 'ID Class Brand Design' : 'Design de marca'}
                            local= 'Estúdio Kimura'
                            ></AboutEdu>
                        </div>
                    </div>
                    <div className={styles.LangContainer}>
                        <h2 className={styles.LangTitle}>{x ? 'LANGUAGE' : 'IDIOMAS'}</h2>
                        <div className={styles.LangDesc}>
                            <div className={styles.LangDescBox}>
                                <h3 className={styles.Language}>{x ? 'Portuguese' : 'Português'}</h3>
                                <p className={styles.Fluency}>{x ? 'Native' : 'Nativo'}</p>
                            </div>
                            <div className={styles.LangDescBox}>
                                <h3 className={styles.Language}>{x ? 'English' : 'Inglês'}</h3>
                                <p className={styles.Fluency}>{x ? 'Advanced' : 'Avançado'}</p>
                            </div>
                            <div className={styles.LangDescBox}>   
                                <h3 className={styles.Language}>{x ? 'Spanish' : 'Espanhol'}</h3>
                                <p className={styles.Fluency}>{x ? 'Advanced' : 'Avançado'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.CurriculumContainer}>
                <a className={styles.Curriculum} href={Arc} download>{x ? 'Download my curriculum here' : 'Faça download do meu curriculo aqui'}</a>
            </div>
            <Footer
                work = {x ? 'Work' : 'Projetos'}
                about = {x ? 'About Me' : 'Sobre mim'}
                contact = {x ? 'Contact' : 'Contato'}
            ></Footer>
        </div>
    )
}

export default AboutMe