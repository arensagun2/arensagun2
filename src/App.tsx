import { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import './App.css'
import './styles/AboutMe.css'
import Header from './components/Header'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './components/AboutMe';

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
      <div className='container'>
        {!viewResume && <Header view={toggle}/>}
      </div>
      {viewResume && 
      <div className='pdf'>
        <motion.a whileHover={{y: -5, cursor: 'pointer'}} onClick={toggle}><FontAwesomeIcon icon={faArrowAltCircleLeft} size='4x'/></motion.a>
        <iframe
          src='/files/cv-iansagun.pdf'
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title='My Resume'
        >
        </iframe>
      </div>}
      <div className='about-me'>
        <AboutMe />
      </div>
    </div>
  )
}

export default App
