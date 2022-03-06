import styles from './Hero.module.css'
import Link from 'next/link'
import {BsArrowDown} from "react-icons/bs";

export default function Hero() {
    return (
        <section className={styles.section}>
            {/*<p className={styles.preTitle}>An addition of my portfolio</p>*/}
            <h1 className={styles.titleHero}>Let me introduce <span>myself</span></h1>
            <Link href="/#impressions">
                <div className={styles.buttonHeroWrapper}>
                    <div className={styles.buttonWrapper}>
                        <div className={styles.buttonHero}>Impressions</div>
                        <div className={styles.iconWrapper}>
                            <BsArrowDown/>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    )
}