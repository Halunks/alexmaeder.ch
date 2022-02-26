import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className={styles.section}>
            <p className={styles.preTitle}>Lorem Ipsum 2022</p>
            <h1 className={styles.titleHero}>Lorem Ipsum Dolor Lorem Ipsum</h1>
            <Link href="/link">
                <div className={styles.buttonHero}>Ipsum Lorem</div>
            </Link>
        </section>
    )
}