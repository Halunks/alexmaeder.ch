import styles from './Pictures.module.css'
import Link from 'next/link'
import {BsArrowUpRight, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
import React, {FC, useCallback, useEffect, useState} from "react";
import Card from "../components/Card";
import profilePic from '../public/images/alex-maeder.jpg'

const Pictures: FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false})
    const [windowDimension, setWindowDimension] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            //Embla API is ready
        }
        if (!isMobile) {
            return scrollNext();
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

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

    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    Lorem
                </h2>
                <Link href="/" passHref={true}>
                    <div className={styles.linkWrapperWrapper}>

                        <div className={styles.linkWrapper}>
                            <div className={styles.link}>Ipsum Dolor</div>
                            <div className={styles.icon}>
                                <BsArrowUpRight/>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    <Card
                        cardPic={profilePic}
                        cardAltText={"Max Muster"}
                        cardTitle={"Dolor"}
                        cardDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #ff80ed, #fec810)"}}
                    />
                    <Card
                        cardPic={profilePic}
                        cardAltText={"Max Muster"}
                        cardTitle={"Dolor"}
                        cardDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #0a047a, #ff80ed)"}}
                    />
                    <Card
                        cardPic={profilePic}
                        cardAltText={"Max Muster"}
                        cardTitle={"Dolor"}
                        cardDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #0a047a, #427aff)"}}
                    />
                    <Card
                        cardPic={profilePic}
                        cardAltText={"Max Muster"}
                        cardTitle={"Dolor"}
                        cardDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #fec810, #ff80ed)"}}
                    />
                    <Card
                        cardPic={profilePic}
                        cardAltText={"Max Muster"}
                        cardTitle={"Dolor"}
                        cardDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #ff80ed, #2b6aff)"}}
                    />
                    <Card
                        cardPic={profilePic}
                        cardAltText={"Max Muster"}
                        cardTitle={"Dolor"}
                        cardDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #ff80ed, #fec810)"}}
                    />
                </div>
            </div>
            <div className={styles.slideBtnWrapper}>
                <div className={styles.slideButtons}>
                    <button className={styles.umblaPrev} onClick={scrollPrev}><BsFillArrowLeftCircleFill/></button>
                </div>
                <div className={styles.slideButtons}>
                    <button className={styles.umblaNext} onClick={scrollNext}><BsFillArrowRightCircleFill/></button>
                </div>
            </div>
        </section>
    )
}

export default Pictures;