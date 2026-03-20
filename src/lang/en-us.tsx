import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
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
        icon: faFileLines
    },
    {
        name: "github", 
        link: "https://github.com/arensagun2", 
        icon: faGithub
    },
    {
        name: "linkedIn", 
        link: "https://www.linkedin.com/in/arenjosiah-sagun-9b5959267", 
        icon: faLinkedin
    }
]

// Changing Texts
export const occupations = [
    "Software Engineer", 
    "Front-End Developer", 
    "Engineer", 
    "Gamer",
    "Application Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Creative Thinker",
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
        items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "C#", "HTML", "CSS", "Racket"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["React", "Angular", "NextJS", "ViteJS", "Flutter", "Flask", "ASP.NET"]
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Firebase", "Azure DevOps", "Docker", "Heroku", "AWS", "Power BI"]
    },
    {
        category: "Databases & APIs",
        items: ["SQL Server", "MySQL", "Discord API"]
    },
    {
        category: "Other",
        items: ["xUnit", "REST APIs", "Geolocation API", "Adzuna API"]
    }
]

// Experience
export const experience = [
    {
        period: "2026 – Present",
        company: "The Center for Health Information and Analysis",
        location: "Boston, MA",
        role: "Application Developer",
        bullets: [
            "Developed and maintained .NET libraries with native interop, published as NuGet packages to an internal Azure DevOps Artifacts feed for use across enterprise healthcare data systems",
            "Collaborated with senior developers to integrate internally developed DLLs into production C# applications",
            "Built and maintained ETL data pipelines and WCF services",
            "Designed and updated SSRS stored procedures and reports for state healthcare data extraction and compliance reporting",
            "Maintained technical documentation for code changes, library versioning, and deployment processes",
        ]
    },
    {
        period: "2024 – 2026",
        company: "Starbucks",
        location: "Weymouth, MA",
        role: "Barista / Barista Trainer",
        bullets: [
            "Delivered high-quality customer service while training new baristas and maintaining health, safety, and store standards",
        ]
    },
    {
        period: "2022",
        company: "The Center for Health Information & Analysis",
        location: "Boston, MA",
        role: "Software Developer Intern",
        bullets: [
            "Assisted in designing, coding, and debugging software applications using Angular (Front-End) and C# (Back-End)",
            "Collaborated with senior developers to implement new features and improve existing functionality",
            "Maintained clear and concise documentation for code changes and technical processes",
            "Researched and learned new technologies to contribute to project development and innovation",
        ]
    },
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