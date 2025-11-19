import { useEffect } from 'react'
import './App.css'
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import { fullname } from './lang/en-us';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-card'>
        <h1 className='title name'>{fullname}</h1>
      </div>
    </div>
  )
}

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
    <div className='main-body'>
      <motion.div className='follow'
        style={{
          position: "fixed",
          top: -250,
          left: -250,
          translateX: useMotionTemplate`${smoothX}px`,
          translateY: useMotionTemplate`${smoothY}px`,
        }}
      ></motion.div>
      <Header />
      <div className='content-body'>
        <AboutMe />
        <Projects />
      </div>
    </div>
  )
}
