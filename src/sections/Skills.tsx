import './styles/Skills.css'
import { skills } from '../lang/en-us'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { IconType } from 'react-icons'
import {
    SiJavascript, SiTypescript, SiPython, SiCplusplus,
    SiHtml5, SiReact, SiAngular, SiNextdotjs, SiVite,
    SiFlutter, SiFlask, SiDotnet, SiGit, SiFirebase, SiDocker,
    SiHeroku, SiMysql, SiDiscord, SiRacket
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { TbBrandCSharp, TbBrandCss3, TbSql } from 'react-icons/tb'
import { VscAzureDevops } from 'react-icons/vsc'
import { Icon as IconifyIcon } from '@iconify/react'
import powerBiIcon from '@iconify-icons/logos/microsoft-power-bi'

const PowerBiIcon: IconType = ({ className, style }) => <IconifyIcon icon={powerBiIcon} className={className} style={style} />

const colorMap: Record<string, string> = {
    'JavaScript':   '#F7DF1E',
    'TypeScript':   '#3178C6',
    'Python':       '#3776AB',
    'Java':         '#ED8B00',
    'C/C++':        '#00599C',
    'C#':           '#9B4993',
    'HTML':         '#E34F26',
    'CSS':          '#1572B6',
    'Racket':       '#9F1D20',
    'React':        '#61DAFB',
    'Angular':      '#DD0031',
    'NextJS':       '#000000',
    'ViteJS':       '#646CFF',
    'Flutter':      '#02569B',
    'Flask':        '#000000',
    'ASP.NET':      '#512BD4',
    'Git':          '#F05032',
    'Firebase':     '#FFCA28',
    'Azure DevOps': '#0078D4',
    'Docker':       '#2496ED',
    'Heroku':       '#430098',
    'AWS':          '#FF9900',
    'MySQL':        '#4479A1',
    'SQL Server':   '#CC2927',
    'Discord API':  '#5865F2',
}

const iconMap: Record<string, IconType> = {
    'JavaScript':   SiJavascript,
    'TypeScript':   SiTypescript,
    'Python':       SiPython,
    'Java':         FaJava,
    'C/C++':        SiCplusplus,
    'C#':           TbBrandCSharp,
    'HTML':         SiHtml5,
    'CSS':          TbBrandCss3,
    'Racket':       SiRacket,
    'React':        SiReact,
    'Angular':      SiAngular,
    'NextJS':       SiNextdotjs,
    'ViteJS':       SiVite,
    'Flutter':      SiFlutter,
    'Flask':        SiFlask,
    'ASP.NET':      SiDotnet,
    'Git':          SiGit,
    'Firebase':     SiFirebase,
    'Azure DevOps': VscAzureDevops,
    'Docker':       SiDocker,
    'Heroku':       SiHeroku,
    'AWS':          FaAws,
    'Power BI':     PowerBiIcon,
    'MySQL':        SiMysql,
    'SQL Server':   TbSql,
    'Discord API':  SiDiscord,
}

function SkillPill({ item, Icon }: { item: string; Icon: IconType | undefined }) {
    const ref = useRef<HTMLSpanElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        const el = ref.current
        if (!el) return
        const { left, top, width, height } = el.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / (width / 2)
        const y = (e.clientY - top - height / 2) / (height / 2)
        el.style.transition = 'none'
        el.style.transform = `perspective(400px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) scale(1.15)`
    }

    const handleMouseLeave = () => {
        const el = ref.current
        if (!el) return
        el.style.transition = 'transform 0.4s ease'
        el.style.transform = ''
    }

    return (
        <span
            ref={ref}
            className={`skill-pill${Icon ? '' : ' skill-pill--text'}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {Icon && <Icon className='skill-icon' style={{ color: colorMap[item] }} />}
            {item}
        </span>
    )
}

function Skills() {
    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className='skills-grid'>
                {skills.map((group) => (
                    <motion.div
                        key={group.category}
                        className='skill-card'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3>{group.category}</h3>
                        <div className='skill-items'>
                            {group.items.map(item => (
                                <SkillPill key={item} item={item} Icon={iconMap[item]} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
