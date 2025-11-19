import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

// Name
export const fullname = "ArenJosiah Sagun"
export const nickname = "Ian"

// College
export const college = "University of Massachusetts Boston"
export const bachelor = "Bachelors of Science 2024"

// Social Links
export const socialLinks = [
    {
        name: "resume", 
        link: "/cv-iansagun.pdf", 
        icon: faFilePdf
    },
    {
        name: "github", 
        link: "https://github.com/arensagun2", 
        icon: faGithub
    },
    {
        name: "linkedIn", 
        link: "https://www.linkedin.com/in/ian-sagun-9b5959267/", 
        icon: faLinkedin
    }
]

// Changing Texts
export const occupations = [
    "Software Engineer", 
    "Front-End Developer", 
    "Engineer", 
    "Gamer"
]

// About Me Content
export const aboutMe = `
    Hi, I’m Ian, a passionate Software Engineer with a strong foundation in Computer Science. 
    I love tackling complex problems through creative solutions and critical thinking. 
    My curiosity drives me to constantly learn, experiment, and grow — whether it’s exploring new technologies or refining my craft.
    When I’m not deep in code, you’ll probably find me gaming, chatting on Discord, or brainstorming new ideas with friends. 
    I’m always excited to collaborate, share knowledge, and take on new challenges — let’s build something amazing together!
`;

// Projects
export const projects = [
    {
        name: "Coupled", 
        link: "https://twocoupled.vercel.app/",
        desc: "A web application made for couples"
    },
    {
        name: "StemUp", 
        link: "https://stemup.web.app/",
        desc: "A web application made for students"
    }
]