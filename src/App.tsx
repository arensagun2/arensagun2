import { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import './App.css'
import Header from './components/Header'
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  const [viewResume, setView] = useState(false);

  function toggle() {
    setView((prev) => !prev);
  }

  useEffect(() => {
    document.title = "Ian Sagun"
  }, [])

  return (
    <div className='main'>
      {viewResume && 
      <div className='pdf'>
        <motion.a whileHover={{y: -5, cursor: 'pointer'}} onClick={toggle}><FontAwesomeIcon icon={faCircleLeft} size='4x'/></motion.a>
        <iframe
          src='/files/cv-iansagun.pdf'
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title='My Resume'
        >
        </iframe>
      </div>}
      {!viewResume &&
      <div className='container'>
        <Header view={toggle} />
        <div className='content-container'>
          <AboutMe />
          <Projects />
        </div>
      </div>}
    </div>
  )
}

export default App
