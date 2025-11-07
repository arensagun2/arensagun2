import '../styles/AboutMe.css'
import { aboutMe } from '../Info';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

function AboutMe() {
    const thisElementRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: thisElementRef,
        offset: ["start end", "center center"]
    });
    const scale = useTransform(
        scrollYProgress, 
        [0, 0.5, 0.5], 
        [0.5, 1, 1]
    )
    return (
        <motion.div className='about-me'
            ref={thisElementRef}
            style={{scale}}
        >
            <h1>About Me</h1>
            <p>{aboutMe}</p>
        </motion.div>
    )
}

export default AboutMe;