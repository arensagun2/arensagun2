import myPic from '../assets/myPicCrop.jpg'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <>
            <div className='header-box header'>
                <img src={myPic} alt="me" className='me' />
                <div className='content'>
                    <div className='information'>
                        <h1>ArenJosiah Sagun</h1>
                        <h2>Upcoming Graduate at University of Massachusetts Boston</h2>
                        <p>Hi Visitor, Welcome to my portfolio</p>
                    </div>
                    <div className='social-icons'>
                        <a href='https://www.instagram.com/iahnsagun/' target='_blank'>
                            <FontAwesomeIcon  icon={faInstagram} size='4x' className='icon'/></a>
                        <a href='https://twitter.com/ArenJosiah' target='_blank'>
                            <FontAwesomeIcon icon={faTwitter} size='4x' className='icon'/></a>
                        <a href='https://github.com/arensagun2' target='_blank'>
                            <FontAwesomeIcon  icon={faGithub} size='4x' className='icon'/></a>
                        <a href='https://www.linkedin.com/in/arenjosiah-sagun-9b5959267/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} size='4x' className='icon'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}