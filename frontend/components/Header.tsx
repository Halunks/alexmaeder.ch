import styles from './Header.module.css'
import Image from "next/image";
import Link from 'next/link'
import {Fragment, useEffect, useState} from "react";
import {RiMenuFoldLine, RiMenuUnfoldLine} from "react-icons/ri";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import {IoMdSend} from "react-icons/io";


export default function Header() {
    const [windowDimension, setWindowDimension] = useState(0);
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 800;

    useEffect(() => {
        const onScroll = () => setIsMenuExpanded(false)

        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    return (
        <header className={styles.container}>
            {isMobile ? (
                <Fragment>
                    <div className={styles.logoMobile}>
                        <Link href="/" passHref={true}>
                            <Image src="/logos/logoDark.svg"
                                   alt="A Logo of pinocchio"
                                   height={40}
                                   width={40}
                            />
                        </Link>
                        <Link href="/" passHref={true}>
                            <div className={styles.nametagMobile}>alexmaeder.ch</div>
                        </Link>
                    </div>
                    {isMenuExpanded ? (<>
                            <div className={styles.noiseOverlay}>
                            </div>
                            <nav className={styles.navMobile}>
                                <div className={styles.logoWrapper}>
                                    <div className={styles.nametagWrapper}>
                                        <div className={styles.logoMobileExpand}>
                                            <Link href="/" passHref={true}>
                                                <Image src="/logos/logo.svg"
                                                       alt="A Logo of pinocchio"
                                                       height={40}
                                                       width={40}
                                                />
                                            </Link>
                                        </div>
                                        <Link href="/" passHref={true}>
                                            <div className={styles.nametagMobileExpand}>alexmaeder.ch</div>
                                        </Link>
                                    </div>
                                    <div className={styles.menuIconExpand} onClick={() => setIsMenuExpanded(false)}>
                                        <RiMenuUnfoldLine/>
                                    </div>
                                </div>
                                <ul className={styles.navMobileList}>
                                    <Link href="/#about" passHref={true}>
                                        <li>About me.</li>
                                    </Link>
                                    <Link href="/#work" passHref={true}>
                                        <li>My work.</li>
                                    </Link>
                                    <Link href="/#techstack" passHref={true}>
                                        <li>Tech Stack.</li>
                                    </Link>
                                </ul>
                                <div className={styles.socialsContainer}>
                                    <Link href={"https://www.linkedin.com/in/alexemanuelmaeder/"}
                                          passHref={true}><BsLinkedin/></Link>
                                    <Link href={"https://github.com/halunks"} passHref={true}><BsGithub/></Link>
                                    <Link href={"https://instagram.com/evenmader"} passHref={true}><BsInstagram/></Link>
                                    <Link href={"https://goo.gl/maps/VUN4uwY8Qrw2qfwf7"}
                                          passHref={true}><IoLocationSharp/></Link>
                                    <Link href={"mailto:alex_maeder@bluewin.ch"} passHref={true}><IoMdSend/></Link>
                                </div>
                            </nav>
                        </>
                    ) : (<>
                            <div className={styles.menuIcon} onClick={() => setIsMenuExpanded(true)}>
                                <RiMenuFoldLine/>
                            </div>
                        </>
                    )
                    }
                </Fragment>
            ) : (
                <Fragment>
                    <div className={styles.logoDesktop}>
                        <Link href="/" passHref>
                            <Image src="/logos/logoDark.svg"
                                   alt="A Logo of Pinocchio"
                                   height={50}
                                   width={50}
                            />
                        </Link>
                        <Link href="/" passHref>
                            <div className={styles.nametagDesktop}>alexmaeder.ch</div>
                        </Link>
                    </div>
                    <div className={styles.btnContainer}>
                        {/*<Link href="/" passHref={true}>*/}
                        {/*    <div className={styles.btnWrapper}>*/}
                        {/*        <div className={styles.button}>Dolor</div>*/}
                        {/*    </div>*/}
                        {/*</Link>*/}
                        {/*<Link href="/" passHref={true}>*/}
                        {/*    <div className={styles.btnWrapper}>*/}
                        {/*        <div className={styles.button}>Ipsum</div>*/}
                        {/*    </div>*/}
                        {/*</Link>*/}
                    </div>
                    <nav className={styles.navigation}>
                        <div className={styles.microcopy}>Want to know what&apos;s under the hood?</div>
                        <div className={styles.externalWrapper}>
                            <Link href="/#techstack" passHref={true}>
                                <div className={styles.external}>Tech Stack</div>
                            </Link>
                        </div>
                    </nav>
                </Fragment>
            )
            }

        </header>
    )
}