import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myPic from '../assets/myPicCrop.jpg'
import { bachelor, college, name, socialLinks } from '../Info'

export default function Header() {
    return (
        <>
            <div className='header-box header'>
                <img src={myPic} alt="me" className='me' />
                <div className='content'>
                    <div className='information'>
                        <div className='name'>
                            <h1>{name}</h1>
                            <p>IAN</p>
                        </div>
                        
                        <div>
                            <h2>{college}</h2>
                            <h2>{bachelor}</h2>
                        </div>
                        <p>Hi There! Welcome to my portfolio</p>
                    </div>
                    <div className='social-icons'>
                        {socialLinks.map((link) => {
                            return <a href={link.link} target='_blank' key={link.name}><FontAwesomeIcon icon={link.icon} className='icon' size='4x'/></a>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}