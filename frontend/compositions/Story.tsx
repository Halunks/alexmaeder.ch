import styles from './Story.module.css'
import defaultImage from '../public/images/default-design.svg'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import useIntersection from '../hooks/useIntersection'

interface storyProps {
    ref: any;
}

export default function Story() {
    const router = useRouter();
    const [whoIsActive, setWhoIsActive] = useState(1);
    const refOne = useRef();
    const refTwo = useRef();
    const refThree = useRef();
    const refFour = useRef();
    const inViewportOne = useIntersection(refOne, '0px');
    const inViewportTwo = useIntersection(refTwo, '0px');
    const inViewportThree = useIntersection(refThree, '0px');
    const inViewportFour = useIntersection(refFour, '0px');

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
                                        >Lorem
                                        </div>
                                    </Link>
                                    <Link href="#two" passHref={false}>
                                        <div
                                            className={whoIsActive === 2 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >Lorem
                                        </div>
                                    </Link>
                                    <Link href="#three" passHref={false}>
                                        <div
                                            className={whoIsActive === 3 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >Lorem
                                        </div>
                                    </Link>
                                    <Link href="#four" passHref={false}>
                                        <div
                                            className={whoIsActive === 4 ? `${styles.stickyNavLinkActive}` : `${styles.stickyNavLink}`}
                                        >Lorem
                                        </div>
                                    </Link>
                                    <div className={styles.stickyNavOverlay}/>
                                </nav>
                            </div>
                            <div
                                id="one" className={styles.contentBlock}>
                                <h3
                                    ref={refOne}
                                    className={styles.contentTitle}>Ipsum Lorem</h3>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ad aliquam animi explicabo, facilis quos vel! Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Cupiditate, quam!</p>
                            </div>
                            <div
                                id="two" className={styles.contentBlock}>
                                <h3
                                    ref={refTwo}
                                    className={styles.contentTitle}>Ipsum Lorem</h3>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ad aliquam animi explicabo, facilis quos vel! Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Alias, atque.</p>
                            </div>
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
                        <div className={styles.posRelTwo}>
                            <div className={styles.stickyContent}>
                                {whoIsActive === 1 ? (
                                    <div className={styles.stickyIlloWrapperVisible}
                                         style={{backgroundColor: "#0a047a"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.stickyIlloWrapperHidden}
                                         style={{backgroundColor: "#0a047a"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {whoIsActive === 2 ? (
                                    <div className={styles.stickyIlloWrapperVisible}
                                         style={{backgroundColor: "#fec810"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.stickyIlloWrapperHidden}
                                         style={{backgroundColor: "#0a047a"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {whoIsActive === 3 ? (
                                    <div className={styles.stickyIlloWrapperVisible}
                                         style={{backgroundColor: "#61fdf4"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.stickyIlloWrapperHidden}
                                         style={{backgroundColor: "#0a047a"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {whoIsActive === 4 ? (
                                    <div className={styles.stickyIlloWrapperVisible}
                                         style={{backgroundColor: "#ff80ed"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.stickyIlloWrapperHidden}
                                         style={{backgroundColor: "#0a047a"}}>
                                        <div className={styles.noiseOverlay}/>
                                        <div className={styles.stickyIllo}>
                                            <div className={styles.reduceMotion}>
                                                <Image
                                                    src={defaultImage}
                                                    alt="default image"
                                                    className={styles.illoImage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}