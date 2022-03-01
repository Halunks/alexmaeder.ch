import styles from './Pictures.module.css'
import Link from 'next/link'
import {BsArrowUpRight, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import Card from "../components/Card";
import useEmblaCarousel from "embla-carousel-react";
import React, {useCallback, useEffect} from "react";

export default function Pictures() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false})

    useEffect(() => {
        if (emblaApi) {
            //Embla API is ready
        }
        return scrollNext();
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    Lorem
                </h2>
                <Link href="https://www.instagram.com/evenmader/" passHref={true}>
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
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