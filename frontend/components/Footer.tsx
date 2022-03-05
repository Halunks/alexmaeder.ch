import styles from './Footer.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.logoWrapper}>
                <Link href="/" passHref={true}>
                    <Image src="/logos/logoDark.svg"
                           alt="A Logo of Pinocchio"
                           height={40}
                           width={40}
                    />
                </Link>
                <Link href="/" passHref={true}>
                    <div className={styles.nametagMobile}>alexmaeder.ch</div>
                </Link>
            </div>
            <div className={styles.linkContainer}>
                <Link href={"/"} passHref={true}>
                    <div>Lorem Ipsum</div>
                </Link>
                <Link href={"/"} passHref={true}>
                    <div>Lorem Ipsum</div>
                </Link>
                <Link href={"/"} passHref={true}>
                    <div>Lorem Ipsum</div>
                </Link>
                <Link href={"/"} passHref={true}>
                    <div>Lorem Ipsum</div>
                </Link>
                <Link href={"/"} passHref={true}>
                    <div>Lorem Ipsum</div>
                </Link>
            </div>
            <div className={styles.credentialsContainer}>
                <div>© 2022 Lorem Ipsum, Inc</div>
            </div>
        </footer>
    )
}