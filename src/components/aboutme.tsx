import style from './components.module.css';

export default function AboutMe() {
    return (
        <div className= "rounded-lg pt-8 pb-8 pl-2 pr-2">
            <h1 className={style.contentTitle}>About Me</h1>
            <div className="header flex justify-center items-center gap-8 pl-24 pr-24">
                <div>
                    <p className='text-indent indent-8 text-2xl text-justify'>
                    My name is ArenJosiah Sagun and I am passionate about technology and innovation. 
                    At 22 years old, I am currently pursuing my studies in Computer Science at the esteemed University of Massachusetts Boston.
                    As a dedicated student, I actively engage in both academic coursework and hands-on projects, aiming to apply theoretical concepts to real-world scenarios. 
                    I believe that education is not only about acquiring knowledge but also about cultivating practical skills and fostering a mindset of innovation and creativity.
                    </p>
                </div>
            </div>
        </div>
    )
}