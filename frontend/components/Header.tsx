import styles from './Header.module.css'
import Image from "next/image";
import Link from 'next/link'
import {Fragment, useEffect, useState} from "react";
import {RiMenuFoldLine, RiMenuUnfoldLine} from "react-icons/ri";


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
                                   alt="A Logo of Pinocchio"
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
                                                       alt="A Logo of Pinocchio"
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
                                    <Link href="/" passHref={true}>
                                        <li>Lorem</li>
                                    </Link>
                                    <Link href="/" passHref={true}>
                                        <li>Ipsum</li>
                                    </Link>
                                    <Link href="/" passHref={true}>
                                        <li>Dolor</li>
                                    </Link>
                                </ul>
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
                        <div className={styles.microcopy}>Lorem Ipsum?</div>
                        <div className={styles.externalWrapper}>
                            <Link href="/" passHref={true}>
                                <div className={styles.external}>Ipsum</div>
                            </Link>
                        </div>
                    </nav>
                </Fragment>
            )
            }

        </header>
    )
}