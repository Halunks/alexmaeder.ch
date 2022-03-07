import styles from './Footer.module.css'
import Link from "next/link";
import Image from "next/image";
import {BsArrowUp, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import {IoMdSend} from "react-icons/io";

export default function Footer() {

    return (
        <footer className={styles.footerContainer}>
            <Link href={"/"} passHref={true}>
                <div className={styles.buttonWrapper}>
                    <div className={styles.buttonTop}>
                        <div className={styles.iconWrapper}><BsArrowUp/></div>
                    </div>
                </div>
            </Link>
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
                    <div>Privacy</div>
                </Link>
                <Link href={"/"} passHref={true}>
                    <div>Terms</div>
                </Link>
                <Link href={"/"} passHref={true}>
                    <div>About</div>
                </Link>
            </div>
            <div className={styles.socialsContainer}>
                <Link href={"https://www.linkedin.com/in/alexemanuelmaeder/"} passHref={true}><BsLinkedin/></Link>
                <Link href={"https://github.com/halunks"} passHref={true}><BsGithub/></Link>
                <Link href={"https://instagram.com/evenmader"} passHref={true}><BsInstagram/></Link>
                <Link href={"https://goo.gl/maps/VUN4uwY8Qrw2qfwf7"} passHref={true}><IoLocationSharp/></Link>
                <Link href={"mailto:alex_maeder@bluewin.ch"} passHref={true}><IoMdSend/></Link>
            </div>
            <div className={styles.credentialsContainer}>
                <div>© 2022 Alex Mäder</div>
            </div>
        </footer>
    )
}