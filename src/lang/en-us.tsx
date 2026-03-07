import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import stemUpImg from '../assets/StemUp.png'

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
    "Gamer",
    "Application Developer"
]

// About Me Content
export const aboutMe = `
    Hi, I’m Ian, a Software Engineer with a strong foundation in Computer Science. 
    I love tackling complex problems through creative solutions and critical thinking. 
    My curiosity drives me to constantly learn, experiment, and grow — whether it’s exploring new technologies or refining my craft.
    When I’m not deep in code, you’ll probably find me gaming, chatting on Discord, or brainstorming new ideas with friends. 
    I’m always excited to collaborate, share knowledge, and take on new challenges — let’s build something amazing together!
`;

// Skills
export const skills = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "C#", "HTML", "CSS"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["React", "Angular", "NextJS", "ViteJS", "Flutter", "Flask"]
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Firebase", "Azure DevOps", "Docker", "Heroku"]
    },
    {
        category: "Databases & APIs",
        items: ["SQL Server", "MySQL", "REST APIs", "Discord API"]
    }
]

// Projects
export const projects = [
    {
        name: "StemUp",
        link: "https://stemup.web.app/",
        desc: "A web application made for students to access STEM resources, tools, and collaborative learning in one place.",
        image: stemUpImg,
        tags: ["React", "Firebase", "TypeScript"]
    }
]