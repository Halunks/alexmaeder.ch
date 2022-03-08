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
    }, [inViewportOne, inViewportTwo, inViewportThree, inViewportFour]);

    useEffect(() => {
        switch (whoIsActive) {
            case 1:
                setBackgroundImg(defaultImageOne);
                setBackgroundCol({backgroundColor: "#0a047a"});
                break;
            case 2:
                setBackgroundImg(defaultImageTwo);
                setBackgroundCol({backgroundColor: "#ff80ed"});
                break;
            case 3:
                setBackgroundImg(defaultImageThree);
                setBackgroundCol({backgroundColor: "#fec810"});
                break;
            case 4:
                setBackgroundImg(defaultImageFour);
                setBackgroundCol({backgroundColor: "#2b6aff"});
                break;
            default:
                setBackgroundImg(defaultImageOne)
                setBackgroundCol({backgroundColor: "#0a047a"})
        }
    }, [whoIsActive])

    return (
        <section id="work" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>My <span>Design</span> Principles</h2>
                </div>
                <div className={styles.storySection}>
                    <div className={styles.storyGrid}>
                        <div className={styles.posRelOne}>
                            <div className={styles.stickyNavWrapper}>
                                <nav className={styles.stickyNav}>
                                    <Link href="#one" passHref={true}>
                                        <div
                                            className={whoIsActive === 1 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >Nr. I
                                        </div>
                                    </Link>
                                    <Link href="#two" passHref={true}>
                                        <div
                                            className={whoIsActive === 2 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >II
                                        </div>
                                    </Link>
                                    <Link href="#three" passHref={true}>
                                        <div
                                            className={whoIsActive === 3 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >III
                                        </div>
                                    </Link>
                                    <Link href="#four" passHref={true}>
                                        <div
                                            className={whoIsActive === 4 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >IV
                                        </div>
                                    </Link>
                                    <div className={styles.stickyNavOverlay}/>
                                </nav>
                            </div>
                            {isMobile ? (
                                <div id="one" className={styles.mobileImageWrapperOne}>
                                    <Image src={defaultImageOne}/>
                                </div>
                            ) : null}
                            <div id="one"
                                 className={styles.contentBlock}>
                                <h3
                                    ref={refOne}
                                    className={styles.contentTitle}>Recycling</h3>
                                <p className={styles.contentParagraph}>By reusing established material, I already have a
                                    proof of concept. For example, the design of this website is inspired by the
                                    style
                                    of the <Link href={"https://en.wikipedia.org/wiki/Memphis_Group"}
                                                 passHref={true}><span
                                        className={styles.link}>Memphis Group</span></Link> from the 1980s.
                                </p>
                            </div>
                            {isMobile ? (
                                <div id="two" className={styles.mobileImageWrapperTwo}>
                                    <Image src={defaultImageTwo}/>
                                </div>
                            ) : null}
                            <div id="two"
                                 className={styles.contentBlock}>
                                <h3
                                    ref={refTwo}
                                    className={styles.contentTitle}>Usability</h3>
                                <p className={styles.contentParagraph}>I have open eyes and ears when it comes to new
                                    insights about humans interacting on a screen. For example, after the <span>Zeigarnik
                                        effect</span> you can remember best unfin<br/><br/>Read more <span
                                        className={styles.link}><Link href={"https://lawsofux.com/zeigarnik-effect/"}
                                                                      passHref={true}>lawsofux.com</Link></span>
                                </p>
                            </div>
                            {isMobile ? (
                                <div id="three" className={styles.mobileImageWrapperThree}>
                                    <Image src={defaultImageThree}/>
                                </div>
                            ) : null}
                            <div id="three"
                                 className={styles.contentBlock}>
                                <h3
                                    ref={refThree}
                                    className={styles.contentTitle}>Simplicity</h3>
                                <p className={styles.contentParagraph}>Minimalistic design is easier to navigate, loads
                                    faster and is better scannable.</p>
                            </div>
                            {isMobile ? (
                                <div id="four" className={styles.mobileImageWrapperFour}>
                                    <Image src={defaultImageFour}/>
                                </div>
                            ) : null}
                            <div id="four"
                                 className={styles.contentBlock}>
                                <h3
                                    ref={refFour}
                                    className={styles.contentTitle}>Fun</h3>
                                <p className={styles.contentParagraph}>I enjoy creating a website, and I hope that is
                                    reflected in the design. I build the user a playground where they can click buttons,
                                    zoom around, and explore.</p>
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