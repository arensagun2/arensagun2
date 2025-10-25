import '../styles/Projects.css'
import { projects } from '../Info';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

function Projects() {
    const thisElementRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: thisElementRef,
        offset: ["start end", "center center"]
    });
    const scale = useTransform(
        scrollYProgress, 
        [0, 0.5, 1], 
        [0.5, 1, 0.5]
    )
    return (
        <motion.div className='projects'
            ref={thisElementRef}
            style={{scale}}
        >
            <h1>Projects</h1>
            <div className='projects-container'>
                {projects.map((project) => {
                    return (
                        <div className='project'>
                            <h2>{project.name}</h2>
                            <p>{project.desc}</p>
                            <motion.a 
                                href={project.link} 
                                target='_blank'
                                whileHover={{scale:1.1}}
                            >Visit</motion.a>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Projects;