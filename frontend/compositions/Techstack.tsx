import styles from './Techstack.module.css'
import {SiCss3, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTypescript, SiVercel} from "react-icons/si";
import Link from 'next/link'

export default function Techstack() {

    return (
        <section id="techstack" className={styles.section}>
            <div className={styles.titleWrapper}>
                {/*<h3 className={styles.preTitle}>Project</h3>*/}
                <h2 className={styles.title}>
                    Tech Stack
                </h2>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentWrapper}>
                    <Link href="https://en.wikipedia.org/wiki/TypeScript"><SiTypescript/></Link>
                    <Link href="https://en.wikipedia.org/wiki/JavaScript"><SiJavascript/></Link>
                    <Link href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"><SiCss3/></Link>
                    <Link href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"><SiHtml5/></Link>
                </div>
                <div className={styles.contentWrapper}>
                    <Link href={"https://reactjs.org/"}><SiReact/></Link>
                    <Link href={"https://nextjs.org/"}><SiNextdotjs/></Link>
                    <Link href={"https://vercel.com/"}><SiVercel/></Link>
                </div>
                <div className={styles.contentWrapperSocials}>
                    <div className={styles.buttonPreText}>Down a technical rabbit hole?</div>
                    <Link href={"https://github.com/halunks"}>
                        <div className={styles.buttonGitWrapper}>
                            <div className={styles.buttonGit}>GitHub<SiGithub/></div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
