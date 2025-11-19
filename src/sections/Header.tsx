import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fullname, socialLinks, occupations } from '../lang/en-us'
import {motion } from 'motion/react'
import './styles/Header.css'
import myPic from '../assets/myPicCrop.jpg'
import { useEffect, useState } from 'react'

export default function Header() {
    const [i, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % occupations.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='header-box header'>
            <div className='content'>
                <div className='information'>
                    <div className='text'>
                        <h1 className='name'>Hi Visitor! <br></br>I'm <span>{fullname}.</span></h1>
                        <h3 className='sub'>I am a
                            <motion.span 
                                key={occupations[i]}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1}}
                            >
                                {occupations[i]}
                            </motion.span>
                        </h3>
                    </div>
                    <img src={myPic} alt="" className='me' />
                </div>
                
                <div className='social-icons'>
                    {socialLinks.map((link) => {
                        return (
                            <motion.a 
                                whileHover={{y: -5}} 
                                href={link.link} 
                                target='_blank' 
                                key={link.name}
                            >
                                <FontAwesomeIcon 
                                    icon={link.icon} 
                                    className='icon' 
                                    size='4x'
                                />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}