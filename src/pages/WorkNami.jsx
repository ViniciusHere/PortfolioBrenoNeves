import Header from '../components/Header'
import PagesTitle from '../components/PagesTitle'
import ResumeProject from '../components/ResumeProject'
import cover from '../assets/workNami/Cover.png'
import cover2 from '../assets/workNami/Cover2.png'

const WorkNami = () => {
    return(
        <div>
            <Header></Header>
            
            <PagesTitle
            title = 'WORK'
            span = '//'
            name = 'NAMI'
            >
            </PagesTitle>
            <ResumeProject
            banner = {cover}
            
            
            ></ResumeProject>
        </div>
    )
}

export default WorkNami