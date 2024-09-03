// Styles
import styles from '../../styles/WorkProject.module.css';

const WorkProject = ({ img, title, btn1, btn2, btn3 }) => {
    return (
        <section className={styles.ProjectContainer}>
            <div className={styles.ImgContainer}>
                <img className={styles.Img} src={img} alt={title} />
            </div>
            
            <div className={styles.ImgInfo}>
                <h1 className={styles.ImgTitle}>{title}</h1>
                <div className={styles.buttonContainer}>
                    {btn1 && <button className={styles.button}>{btn1}</button>}
                    {btn2 && <button className={styles.button}>{btn2}</button>}
                    {btn3 && <button className={styles.button}>{btn3}</button>}
                </div>
            </div>
        </section>
    );
};

export default WorkProject;