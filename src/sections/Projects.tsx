import './styles/Projects.css'
import { projects } from '../lang/en-us';
import { motion } from 'motion/react';

function Projects() {
    return (
        <motion.div className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {projects.map((project) => (
                    <motion.div
                        key={project.name}
                        className='project'
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        {project.image && (
                            <div className='project-image'>
                                <img src={project.image} alt={project.name} />
                            </div>
                        )}
                        <div className='project-body'>
                            <h2>{project.name}</h2>
                            <p>{project.desc}</p>
                            {project.tags && (
                                <div className='project-tags'>
                                    {project.tags.map(tag => (
                                        <span key={tag} className='tag'>{tag}</span>
                                    ))}
                                </div>
                            )}
                            <a href={project.link} target='_blank' className='project-link'>
                                Visit Site →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Projects;