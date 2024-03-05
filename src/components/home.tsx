import style from './components.module.css';
import Image from "next/image"

export default function Home() {
    return (
        <div className={style.home}>
            <Image src="/myPicCrop.jpg" alt="mypicture" width={400} height={400} className='me rounded-full'/>
            <div>
                <h1>Hi,<br/> I&apos;m Ian<br/> Full-Stack Developer</h1>
                <button>Contact</button>
            </div>            
        </div>
    )
}