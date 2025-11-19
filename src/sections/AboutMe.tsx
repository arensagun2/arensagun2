import './styles/AboutMe.css'
import { aboutMe } from '../lang/en-us';
import { motion } from 'motion/react';

function AboutMe() {
    return (
        <motion.div className='about-me'>
            <h1>About Me</h1>
            <p>{aboutMe}</p>
        </motion.div>
    )
}

export default AboutMe;