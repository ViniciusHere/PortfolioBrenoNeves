// Components
import Header from '../components/Header'
import PagesTitle from '../components/PagesTitle'
import WorkProject from '../components/Work/WorkProject'
import Footer from '../components/Footer'

// Hooks
import { useState, useEffect } from 'react'

// Styles
import styles from '../styles/Work.module.css'

// Assets
import CareLover from '../assets/work/CareLover.png'
import Nami from '../assets/work/Nami.png'
import Agilease from '../assets/work/Agilease.png'
import Bikcraft from '../assets/work/Bikcraft.png'

// Code

const Work = () => {

    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className={styles.WorkContainer}>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <PagesTitle
            title = {x ? 'WORK' : 'PROJETOS'}
            span = '.'
            ></PagesTitle>
            <div className={styles.ContainerFlex}>
                <div className={styles.ProjectContainer}>
                    <WorkProject
                        img = {CareLover}
                        title = {'Carelover'}
                        btn1 = {'UX Design'}
                        btn2 = {'UI Design'}
                        btn3 = {'Mobile App Design'}
                    ></WorkProject>
                    <WorkProject
                        img = {Agilease}
                        title = {'Agilease'}
                        btn1 = {'UI Design'}
                        btn3 = {'Website Design'}
                    ></WorkProject>
                    <WorkProject
                        img = {Nami}
                        title = {'Nami'}
                        btn1 = {'UX Design'}
                        btn2 = {'UI Design'}
                        btn3 = {'Mobile App Design'}
                    ></WorkProject>
                    <WorkProject
                        img = {Bikcraft}
                        title = {'Bikcraft'}
                        btn1 = {'UX Design'}
                        btn2 = {'UI Design'}
                        btn3 = {'Website Design'}
                    ></WorkProject>
                </div>
            </div>
            <Footer
                work = {x ? 'Work' : 'Projetos'}
                about = {x ? 'About Me' : 'Sobre mim'}
                contact = {x ? 'Contact' : 'Contato'}
            ></Footer>
        </div>
    )
}

export default Work