import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className={styles.section}>
            <p className={styles.preTitle}>Lorem Ipsum 2022</p>
            <h1 className={styles.titleHero}>Lorem Ips Dolor Lorem <span>Lor</span> Ipsum</h1>
            <div className={styles.buttonHeroWrapper}>
                <Link href="/link">
                    <div className={styles.buttonHero}>Ipsum Lorem</div>
                </Link>
            </div>
        </section>
    )
}