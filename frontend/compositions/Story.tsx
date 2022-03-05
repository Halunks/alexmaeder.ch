import styles from './Story.module.css'
import defaultImageOne from '../public/images/memphis.svg'
import defaultImageTwo from '../public/images/memphis.svg'
import defaultImageThree from '../public/images/memphis.svg'
import defaultImageFour from '../public/images/memphis.svg'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef, useState} from "react";
import useIntersection from '../hooks/useIntersection'

interface storyProps {
    ref: any;
}

export default function Story() {
    const [whoIsActive, setWhoIsActive] = useState(1);
    const refOne = useRef<HTMLDivElement>(null);
    const refTwo = useRef<HTMLDivElement>(null);
    const refThree = useRef<HTMLDivElement>(null);
    const refFour = useRef<HTMLDivElement>(null);
    const inViewportOne = useIntersection(refOne, '0px');
    const inViewportTwo = useIntersection(refTwo, '0px');
    const inViewportThree = useIntersection(refThree, '0px');
    const inViewportFour = useIntersection(refFour, '0px');
    const [backgroundCol, setBackgroundCol] = useState({backgroundColor: "#0a047a"})
    const [backgroundImg, setBackgroundImg] = useState(defaultImageOne);
    const [windowDimension, setWindowDimension] = useState(0);

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

    const isMobile = windowDimension <= 1000;

    useEffect(() => {
        if (inViewportOne) {
            setWhoIsActive(1);
        }
        if (inViewportTwo) {
            setWhoIsActive(2);
        }
        if (inViewportThree) {
            setWhoIsActive(3);
        }
        if (inViewportFour) {
            setWhoIsActive(4);
        }

        switch (whoIsActive) {
            case 1:
                setBackgroundImg(defaultImageOne);
                return setBackgroundCol({backgroundColor: "#0a047a"});
            case 2:
                setBackgroundImg(defaultImageTwo);
                return setBackgroundCol({backgroundColor: "#ff80ed"});
            case 3:
                setBackgroundImg(defaultImageThree);
                return setBackgroundCol({backgroundColor: "#fec810"});
            case 4:
                setBackgroundImg(defaultImageFour);
                return setBackgroundCol({backgroundColor: "#2b6aff"});
            default:
                setBackgroundImg(defaultImageOne)
                return setBackgroundCol({backgroundColor: "#0a047a"})

        }
    }, [inViewportOne, inViewportTwo, inViewportThree, inViewportFour]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}><span>Lorem Ipsum</span><br/> Dolor Lorem Ipsum?</h2>
                </div>
                <div className={styles.storySection}>
                    <div className={styles.storyGrid}>
                        <div className={styles.posRelOne}>
                            <div className={styles.stickyNavWrapper}>
                                <nav className={styles.stickyNav}>
                                    <Link href="#one" passHref={false}>
                                        <div
                                            className={whoIsActive === 1 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >Act I
                                        </div>
                                    </Link>
                                    <Link href="#two" passHref={false}>
                                        <div
                                            className={whoIsActive === 2 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >II
                                        </div>
                                    </Link>
                                    <Link href="#three" passHref={false}>
                                        <div
                                            className={whoIsActive === 3 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >III
                                        </div>
                                    </Link>
                                    <Link href="#four" passHref={false}>
                                        <div
                                            className={whoIsActive === 4 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >IV
                                        </div>
                                    </Link>
                                    <div className={styles.stickyNavOverlay}/>
                                </nav>
                            </div>
                            {isMobile ? (
                                <div className={styles.mobileImageWrapperOne}>
                                    <Image src={defaultImageOne}/>
                                </div>
                            ) : null}
                            <div
                                id="one" className={styles.contentBlock}>
                                <h3
                                    ref={refOne}
                                    className={styles.contentTitle}>Ipsum Lorem</h3>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ad aliquam animi explicabo, facilis quos vel! Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Cupiditate, quam!</p>
                            </div>
                            {isMobile ? (
                                <div className={styles.mobileImageWrapperTwo}>
                                    <Image src={defaultImageTwo}/>
                                </div>
                            ) : null}
                            <div
                                id="two" className={styles.contentBlock}>
                                <h3
                                    ref={refTwo}
                                    className={styles.contentTitle}>Ipsum Lorem</h3>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ad aliquam animi explicabo, facilis quos vel! Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Alias, atque.</p>
                            </div>
                            {isMobile ? (
                                <div className={styles.mobileImageWrapperThree}>
                                    <Image src={defaultImageThree}/>
                                </div>
                            ) : null}
                            <div
                                id="three" className={styles.contentBlock}>
                                <h3
                                    ref={refThree}
                                    className={styles.contentTitle}>Ipsum Lorem</h3>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ad aliquam animi explicabo, facilis quos vel! Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Eos itaque neque officiis quidem rerum
                                    temporibus?</p>
                            </div>
                            {isMobile ? (
                                <div className={styles.mobileImageWrapperFour}>
                                    <Image src={defaultImageFour}/>
                                </div>
                            ) : null}
                            <div
                                id="four" className={styles.contentBlock}>
                                <h3
                                    ref={refFour}
                                    className={styles.contentTitle}>Ipsum Lorem</h3>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ad aliquam animi explicabo, facilis quos vel! Lorem ipsum dolor
                                    sit amet.</p>
                            </div>
                        </div>
                        {isMobile ? null : (
                            <div className={styles.posRelTwo}>
                                <div className={styles.stickyContent}>
                                    <div className={styles.stickyIlloWrapper}
                                         style={backgroundCol}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <Image
                                                src={backgroundImg}
                                                alt="different shapes in memphis style"
                                                className={styles.illoImage}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}