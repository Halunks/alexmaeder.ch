import styles from './Pictures.module.css'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
import React, {FC, useCallback, useEffect, useState} from "react";
import Card from "../components/Card";
import profile from '../public/images/alex-maeder.jpg'
import yellowstone from '../public/images/yellowstone.png'
import rapperswil from '../public/images/rapperswil.jpg'
import developer from '../public/images/work.png'
import dnd from '../public/images/dnd.jpg'
import mountains from '../public/images/mountains.jpg'

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
        <section id="about" className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    About me
                </h2>
            </div>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    <Card
                        cardPic={profile}
                        cardAltText={"Alex Mäder"}
                        cardTitle={"Hello"}
                        cardDesc={"I'm Alex. An industrial engineer in his late 20s working in web development. I wasn't always a developer. This is my story."}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #ff80ed, #fec810)"}}
                    />
                    <Card
                        cardPic={yellowstone}
                        cardAltText={"Alex making scrambled eggs"}
                        cardTitle={"Eggs"}
                        cardDesc={"That's me preparing scrambled eggs in Yellowstone Park in 2016. Not far from here, I was born a triplet in Denver, Colorado in 1993! There were three single eggs, so I have two wonderful sisters."}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #0a047a, #ff80ed)"}}
                    />
                    <Card
                        cardPic={rapperswil}
                        cardAltText={"Castle of Rapperswil"}
                        cardTitle={"Hometown"}
                        cardDesc={"The hatched eggs did not stay long in the USA. Back in 2006, we moved to Rapperswil-Jona, the most beautiful city on Lake Zurich. I studied industrial engineering there and still live here today and love it."}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #0a047a, #427aff)"}}
                    />
                    <Card
                        cardPic={developer}
                        cardAltText={"Alex Mäder holding a card"}
                        cardTitle={"Work"}
                        cardDesc={"In 2020 I successfully transitioned from product management to web development, largely thanks to an intensive full-stack course in Zurich. Now I design and develop websites professionally."}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #fec810, #ff80ed)"}}
                    />
                    <Card
                        cardPic={dnd}
                        cardAltText={"Dice and an old looking book"}
                        cardTitle={"Hobby"}
                        cardDesc={"I don't always meet the criteria, but deep down I'm a nerd and I love playing Dungeons & Dragons. A tabletop role-playing game where drama and game mechanics come together."}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #ff80ed, #2b6aff)"}}
                    />
                    <Card
                        cardPic={mountains}
                        cardAltText={"Max Muster"}
                        cardTitle={"Balance"}
                        cardDesc={"For me it is important to have a good work-life balance, and for that I like to watch movies, play video games, read, meet friends and go for walks."}
                        cardStyle={{backgroundImage: "linear-gradient(220deg, #ff80ed, #fec810)"}}
                    />
                </div>
            </div>
            <div className={styles.slideBtnWrapper}>
                <div className={styles.slideButtons}>
                    <button className={styles.umblaPrev} onClick={scrollPrev}><BsFillArrowLeftSquareFill/></button>
                </div>
                <div className={styles.slideButtons}>
                    <button className={styles.umblaNext} onClick={scrollNext}><BsFillArrowRightSquareFill/></button>
                </div>
            </div>
            {/*<Link href="/#work" passHref={true}>
                <div className={styles.linkWrapperWrapper}>
                    <div className={styles.linkWrapper}>
                        <div className={styles.link}>Work</div>
                        <div className={styles.icon}>
                            <BsArrowDown/>
                        </div>
                    </div>
                </div>
            </Link>*/}
        </section>
    )
}

export default Pictures;