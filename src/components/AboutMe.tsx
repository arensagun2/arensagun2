import '../styles/AboutMe.css'
import { aboutMe } from '../Info';
import { motion, useScroll, useTransform } from 'motion/react';

function AboutMe() {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 50, 100], [0, 0.5, 1])
    return (
        <motion.div className='about-me'
            style={{scale: scale}}
        >
            <h1>About Me</h1>
            <p>{aboutMe}</p>
        </motion.div>
    )
}

export default AboutMe;