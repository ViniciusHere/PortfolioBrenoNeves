// componentes
import Header from "../components/Header" 
import PagesTitle from "../components/PagesTitle"
import Form from "../components/Form"
import Footer from "../components/Footer"

// styles
import styles from "../styles/Contact.module.css"

// hooks
import { useState, useEffect } from "react"

// code

const Contact = () => {
    const [x, setX] = useState(true);

    const handleLanguageChange = () => {
      setX(prevX => !prevX);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className={styles.ContactContainer}>
            <Header mudanca={handleLanguageChange} mud={x}></Header>
            <PagesTitle
                title = {x ? 'Contact' : 'Contato'}
                span = '.'
                name = ''
            ></PagesTitle>
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

export default Contact