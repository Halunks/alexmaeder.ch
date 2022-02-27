import styles from './Pictures.module.css'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/alex-maeder.jpg'
import {BsArrowUpRight} from "react-icons/bs";

export default function Pictures() {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    Lorem
                </h2>
                <Link href="https://www.instagram.com/evenmader/" passHref={true}>
                    <div className={styles.linkWrapper}>
                        <div className={styles.link}>Ipsum Dolor</div>
                        <div className={styles.icon}>
                            <BsArrowUpRight/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.imageCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className={styles.imageTitle}>Lorem Ipsum</div>
                    <p className={styles.imageDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        debitis quos sint.</p>
                </div>
                <div className={styles.imageCard}>
                    <div className={styles.scndImageWrapper}>
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className={styles.imageTitle}>Lorem Ipsum</div>
                    <p className={styles.imageDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        debitis quos sint.</p>
                </div>
                <div className={styles.imageCard}>
                    <div className={styles.thirdImageWrapper}>
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className={styles.imageTitle}>Lorem Ipsum</div>
                    <p className={styles.imageDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        debitis quos sint.</p>
                </div>
            </div>
        </section>
    )
}