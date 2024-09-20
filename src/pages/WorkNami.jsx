import Header from '../components/Header'
import Frequency from '../components/Frequency'
import PagesTitle from '../components/PagesTitle'
import ResumeProject from '../components/ResumeProject'
import cover from '../assets/workNami/Cover.png'
import cover2 from '../assets/workNami/Cover2.png'
import Frequency1 from '../assets/workNami/Frequency1.png'
import Frequency2 from '../assets/workNami/Frequency1.png'
import Frequency3 from '../assets/workNami/Frequency1.png'
import Frequency4 from '../assets/workNami/Frequency1.png'
import Frequency5 from '../assets/workNami/Frequency1.png'
import Frequency6 from '../assets/workNami/Frequency1.png'
import Frequency7 from '../assets/workNami/Frequency1.png'
import Frequency8 from '../assets/workNami/Frequency1.png'
import Frequency9 from '../assets/workNami/Frequency1.png'
import Frequency10 from '../assets/workNami/Frequency1.png'
import Frequency11 from '../assets/workNami/Frequency1.png'
import { useState, useEffect } from 'react'
import translate from '../translate.json'
import styles from '../styles/workNami.module.css'

const WorkNami = () => {

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
            title = 'WORK'
            span = ' // '
            name = 'NAMI'
            >
            </PagesTitle>
            <ResumeProject
            banner = {cover}
            title = 'Nami'
            titleResume= {x ? translate.workNami.pagesTitle.text1EN : translate.workNami.pagesTitle.text1PT}
            titleLocation= {x ? 'Nova Serrana, Brazil' : 'Nova Serrana, Brasil'}
            titleData= {x ? 'Apr 2023 - Jun 2024.' : 'Abr 2023 - Jun 2024.'}
            button1='UX Design'
            button2='UI Design'
            button3={x ? 'Mobile App Design' : 'Design de aplicativos mobile' }
            banner2 = {cover2}
            text1 = {x ? translate.workNami.resumeProject.text1EN : translate.workNami.resumeProject.text1PT}
            text2 = {x ? translate.workNami.resumeProject.text2EN : translate.workNami.resumeProject.text2PT}
            ></ResumeProject>
            <section className={styles.TextContainer}>
                <p className={styles.Title}>{x ? 'THE PROJECT' : 'O PROJETO'}</p>
                <p className={styles.resume}><span className={styles.SubTitle}>About the client: </span> {x ? translate.workNami.theproject.text1EN : translate.workNami.theproject.text1PT}</p>
                <p className={styles.resume}><span className={styles.SubTitle}>Main Task: </span> {x ? translate.workNami.theproject.text2EN : translate.workNami.theproject.text2PT}</p>
                <p className={styles.resume}><span className={styles.SubTitle}>Solutions: </span> {x ? translate.workNami.theproject.text3EN : translate.workNami.theproject.text3PT}</p>
            </section>
            <section className={styles.TextContainer}>
                <p className={styles.Title}>{x ? 'THE PROCESS' : 'O PROCESSO'}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.text1EN : translate.workNami.theprocess.text1PT}</p>
                <p className={styles.resume}>
                    <span className={styles.SubTitle}>{x ? '→ Research: ' : '→ Pesquisa: '}</span> {x ? translate.workNami.theprocess.text2EN : translate.workNami.theprocess.text2PT} <br />
                    <span className={styles.SubTitle}>{x ? '→ Define: ' : '→ Definir: '}</span> {x ? translate.workNami.theprocess.text3EN : translate.workNami.theprocess.text3PT} <br />
                    <span className={styles.SubTitle}>{x ? '→ Ideate' : '→ Idealizar: '}</span> {x ? "Userflow." : 'Fluxo de usuário.'} <br />
                    <span className={styles.SubTitle}>→ Wireframes: </span> {x ? 'Sketch screens.' : 'Esboçar telas.'} <br />
                    <span className={styles.SubTitle}>{x ? '→ User testing:' : '→ Teste de usuário: '}</span> {x ? translate.workNami.theprocess.text5EN : translate.workNami.theprocess.text5PT} <br />
                    <span className={styles.SubTitle}>→ Design: </span> {x ? translate.workNami.theprocess.text6EN : translate.workNami.theprocess.text6PT}
                </p>
            </section>
            <section className={styles.TextContainer}>
                <p className={styles.Title}>{x ? 'THE PROCESS -' : 'O PROCESSO -'}<span style={{color: '#E71B5A'}}>{x ? ' 1. RESEARCH' : ' 1. PESQUISA'}</span></p>
                <p className={styles.SubTitle}>{x ? 'Qualitative Researtch' : 'Pesquisa Qualitativa'}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text1EN : translate.workNami.theprocess.research.text1PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text2EN : translate.workNami.theprocess.research.text2PT}</p>
                <p className={styles.resume} style={{color: '#E71B5A'}}>{x ? translate.workNami.theprocess.research.text3EN : translate.workNami.theprocess.research.text3PT}</p>
                <p className={styles.resume} style={{color: '#E71B5A'}}>{x ? translate.workNami.theprocess.research.text4EN : translate.workNami.theprocess.research.text4PT}</p>
                <p className={styles.resume} style={{color: '#E71B5A'}}>{x ? translate.workNami.theprocess.research.text5EN : translate.workNami.theprocess.research.text5PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text6EN : translate.workNami.theprocess.research.text6PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text7EN : translate.workNami.theprocess.research.text7PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text8EN : translate.workNami.theprocess.research.text8PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text9EN : translate.workNami.theprocess.research.text9PT}</p>
            </section>
            <section className={styles.TextContainer}>
                <p className={styles.SubTitle}>{x ? 'Quantitative Research' : 'Pesquisa Quantitativa'}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text10EN : translate.workNami.theprocess.research.text10PT}</p>
            </section>
            <Frequency
                img={Frequency1}
                text={x ? translate.workNami.cards.text1EN : translate.workNami.cards.text1PT}
            ></Frequency>
            <Frequency
                img={Frequency2}
                text={x ? translate.workNami.cards.text2EN : translate.workNami.cards.text2PT}
            ></Frequency>
            <Frequency
                img={Frequency3}
                text={x ? translate.workNami.cards.text3EN : translate.workNami.cards.text3PT}
            ></Frequency>
            <Frequency
                img={Frequency4}
                text={x ? translate.workNami.cards.text4EN : translate.workNami.cards.text4PT}
            ></Frequency>
            <Frequency
                img={Frequency5}
                text={x ? translate.workNami.cards.text5EN : translate.workNami.cards.text5PT}
            ></Frequency>
            <Frequency
                img={Frequency6}
                text={x ? translate.workNami.cards.text6EN : translate.workNami.cards.text6PT}
            ></Frequency>
            <Frequency
                img={Frequency7}
                text={x ? translate.workNami.cards.text7EN : translate.workNami.cards.text7PT}
            ></Frequency>
            <Frequency
                img={Frequency8}
                text={x ? translate.workNami.cards.text8EN : translate.workNami.cards.text8PT}
            ></Frequency>
            <Frequency
                img={Frequency9}
                text={x ? translate.workNami.cards.text9EN : translate.workNami.cards.text9PT}
            ></Frequency>
            <Frequency
                img={Frequency10}
                text={x ? translate.workNami.cards.text10EN : translate.workNami.cards.text10PT}
            ></Frequency>
            <Frequency
                img={Frequency11}
                text={x ? translate.workNami.cards.text11EN : translate.workNami.cards.text11PT}
            ></Frequency>
            <section className={styles.TextContainer}>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text11EN : translate.workNami.theprocess.research.text11PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text12EN : translate.workNami.theprocess.research.text12PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theprocess.research.text13EN : translate.workNami.theprocess.research.text13PT}</p>
            </section>
            <section className={styles.TextContainer}>
                <p className={styles.Title}>{x ? 'THE PROCESS -' : 'O PROCESSO -'}<span style={{color: '#E71B5A'}}>{x ? ' 2. DEFINE' : ' 2. DEFINIR'}</span></p>
                <p className={styles.SubTitle}>{x ? 'Empathy Map' : 'Mapa de empartia'}</p>
                <p className={styles.resume}>{x ? translate.workNami.theoprocess2.text1EN : translate.workNami.theoprocess2.text1PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theoprocess2.text2EN : translate.workNami.theoprocess2.text2PT}</p>
                <p className={styles.resume}>{x ? translate.workNami.theoprocess2.text3EN : translate.workNami.theoprocess2.text3PT}</p>
            </section>
        </div>
    )
}

export default WorkNami