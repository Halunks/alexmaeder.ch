import styles from './Pictures.module.css'
import Link from 'next/link'
import {BsArrowUpRight} from "react-icons/bs";

export default function Pictures() {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    Author
                </h2>
                <Link href="https://www.instagram.com/evenmader/" passHref={true}>
                    <div className={styles.linkWrapper}>
                        <div className={styles.link}>All Pictures</div>
                        <div className={styles.icon}>
                            <BsArrowUpRight/>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}