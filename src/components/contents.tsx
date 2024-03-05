import AboutMe from "./aboutme";
import Home from "./home";
import NavigationBar from "./navigationbar";
import style from './components.module.css';

export default function Contents() {
    return (
        <div>
            <NavigationBar />
            <div className={style.content}>
                <Home />
                <AboutMe />
            </div>
        </div>
    )
}