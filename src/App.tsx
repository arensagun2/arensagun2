import { useEffect } from 'react'
import './App.css'
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Header from './sections/Header';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    document.title = "Ian Sagun"
  }, [])

  return (
    <>
      <motion.div className='follow'
        style={{
          translateX: useMotionTemplate`${smoothX}px`,
          translateY: useMotionTemplate`${smoothY}px`,
        }}
      />
      <div className='main-body'>
      <Header />
      <div className='content-body'>
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
    </>
  )
}
