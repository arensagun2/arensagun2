import './styles/Skills.css'
import { skills } from '../lang/en-us'
import { motion } from 'motion/react'

function Skills() {
    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className='skills-grid'>
                {skills.map((group) => (
                    <motion.div
                        key={group.category}
                        className='skill-card'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3>{group.category}</h3>
                        <div className='skill-items'>
                            {group.items.map(item => (
                                <span key={item} className='skill-pill'>{item}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
