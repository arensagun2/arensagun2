import './styles/Experience.css'
import { experience } from '../lang/en-us'
import { motion } from 'motion/react'

function Experience() {
    return (
        <div className='experience'>
            <h1>Experience</h1>
            <div className='experience-list'>
                {experience.map((job, i) => (
                    <motion.div
                        key={i}
                        className='experience-card'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                        <div className='experience-header'>
                            <div className='experience-meta'>
                                <span className='experience-role'>{job.role}</span>
                                <span className='experience-company'>{job.company} · {job.location}</span>
                            </div>
                            <span className='experience-period'>{job.period}</span>
                        </div>
                        <ul className='experience-bullets'>
                            {job.bullets.map((b, j) => (
                                <li key={j}>{b}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
