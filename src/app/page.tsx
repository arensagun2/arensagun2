import Image from 'next/image'

export default function Home() {
  return (
    <main className='pl-8 pr-8'>
      <div className="flex min-h-screen flex-col items-center gap-24 p-8">
        <div className="nav flex justify-between items-center w-full pl-16 pr-16 gap-2 transition-all">
          <h1 className="text-xl text-nowrap">ArenJosiah Sagun</h1>
          <div className="flex gap-8 justify-center items-center">
            <button className="navbuttons hover:text-blue-500 hover:scale-105 transition-all">Introduction</button>
            <button className="navbuttons hover:text-blue-500 hover:scale-105 transition-all">Experience</button>
            <button className="navbuttons hover:text-blue-500 hover:scale-105 transition-all">Projects</button>
            <button className="navbuttons hover:text-blue-500 hover:scale-105 transition-all">Socials</button>
          </div>
        </div>
        <div className='header flex justify-center items-center gap-8 pl-24 pr-24'>
          <Image src="/myPicCrop.jpg" alt="mypicture" width={400} height={400} className='me rounded-full'/>
          <div>
            <p className='text-indent indent-8 text-2xl text-justify'>
              Hello! My name is ArenJosiah Sagun, and I am passionate about technology and innovation. 
              At 22 years old, I am currently pursuing my studies in Computer Science at the esteemed University of Massachusetts Boston.
              As a dedicated student, I actively engage in both academic coursework and hands-on projects, aiming to apply theoretical concepts to real-world scenarios. 
              I believe that education is not only about acquiring knowledge but also about cultivating practical skills and fostering a mindset of innovation and creativity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
