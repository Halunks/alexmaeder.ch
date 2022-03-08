import styles from './Card.module.css'
import Image from 'next/image'
import React, {FC} from "react";

interface cardProps {
    cardDesc: string;
    cardTitle: string;
    cardPic: StaticImageData;
    cardAltText: string;
    cardStyle: object;
}

const Card: FC<cardProps> = ({cardStyle, cardDesc, cardTitle, cardPic, cardAltText}) => {

    return (
        <div className={styles.emblaSlide}>
            <div className={styles.card}>
                <div className={styles.cardPhotoWrapper}>
                    <div
                        style={cardStyle}
                        className={styles.cardPhotoBg}
                    />
                    <div className={styles.cardPhoto}>
                        <div className={styles.cardShapeWrapper}>
                        </div>
                        <Image
                            className={styles.cardImage}
                            src={cardPic}
                            alt={cardAltText}
                            placeholder={"blur"}
                        />
                    </div>
                </div>
                <div className={styles.cardTextWrapper}>
                    <h3 className={styles.cardTitle}>{cardTitle}</h3>
                    <p className={styles.cardDescription}>{cardDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;