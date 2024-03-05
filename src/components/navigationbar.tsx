import NavButton from "./navbuttons"
import style from './components.module.css'

export default function NavigationBar() {
    const navButtons = [
        {name: "Home"},
        {name: "About Me"},
        {name: "Experience"},
        {name: "Projects"},
        {name: "Skills"},
        {name: "Contact Me"}
    ];

    return (
        <div className={style.nav}>
            <h1 className="text-xl text-nowrap">ArenJosiah Sagun</h1>
            <div className="flex gap-8 justify-center items-center">
                {navButtons.map((navButton) => {return <NavButton key={navButton.name} name={navButton.name}/>})}
            </div>
        </div>
    )
}