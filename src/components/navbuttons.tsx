import style from './components.module.css'

export default function NavButton(prop: any) {
    return (
        <button className={style.navbutton}>
            {prop.name}
        </button>
    )
}