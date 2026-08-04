import './styles/Contact.css'
import { contact } from '../lang/en-us'
import { motion } from 'motion/react'
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'

const contactItems = [
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`, Icon: FaPhone },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: FaEnvelope },
    { label: "Location", value: contact.location, href: undefined, Icon: FaLocationDot },
]

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <motion.div
                className='contact-card'
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {contactItems.map(({ label, value, href, Icon }) => {
                    const content = (
                        <>
                            <Icon className='contact-icon' />
                            <div className='contact-text'>
                                <span className='contact-label'>{label}</span>
                                <span className='contact-value'>{value}</span>
                            </div>
                        </>
                    )
                    return href ? (
                        <a key={label} href={href} className='contact-item'>
                            {content}
                        </a>
                    ) : (
                        <div key={label} className='contact-item'>
                            {content}
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Contact
