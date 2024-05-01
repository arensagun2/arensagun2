import { aboutMe } from "../Info";

export default function AboutMe() {
    return (
        <>
            <div className="content-box aboutme">
                <h1>About Me</h1>
                <p>{aboutMe}</p>
            </div>
        </>
    )
}