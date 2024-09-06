import Header from '../components/Header'
import PagesTitle from '../components/PagesTitle'
import ResumeProject from '../components/ResumeProject'
import cover from '../assets/workNami/Cover.png'
import cover2 from '../assets/workNami/Cover2.png'
import { useState } from 'react'
import translate from '../translate.json'
import styles from '../styles/workNami.module.css'

const WorkNami = () => {

    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }


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
            titleResume= 'resumo'
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
                <p className={styles.Title}>{x ? 'THE PROCESS -' : 'O PROCESSO'}<span style={{color: '#E71B5A'}}>{x ? ' 1. RESEARCH' : ' 1. Pesquisa'}</span></p>
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
            
        </div>
    )
}

export default WorkNami