import styles from './Banner.module.css'
import Link from 'next/link'
import {BsArrowUpRight} from "react-icons/bs";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Link
                href="https://nextjs.org"
                passHref={true}
            >
                <div className={styles.bannerFlex}>
                    <div className={styles.bannerText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                    </div>
                    <div className={styles.bannerBtn}>
                        <div className={styles.bannerBtnText}>Lorem Ipsum</div>
                        <div className={styles.bannerIcon}>
                            <BsArrowUpRight/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}