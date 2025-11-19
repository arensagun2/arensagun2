import './styles/Projects.css'
import { projects } from '../lang/en-us';
import { motion } from 'motion/react';

function Projects() {
    return (
        <motion.div className='projects'>
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