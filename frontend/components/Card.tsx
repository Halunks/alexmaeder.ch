import styles from './Card.module.css'
import Image from 'next/image'
import defaultImage from '../public/images/alex-maeder.jpg'

export default function Card() {
    return (
        <div className={styles.sliderItem}>
            <div className={styles.card}>
                <div className={styles.cardPhotoWrapper}>
                    <div className={styles.cardPhotoBg}/>
                    <div className={styles.cardPhoto}>
                        <div className={styles.cardShapeWrapper}>
                        </div>
                        <Image className={styles.cardImage}
                               src={defaultImage}
                               alt="default image"
                        />
                    </div>
                </div>
                <div className={styles.cardTextWrapper}>
                    <h3 className={styles.cardTitle}>Lorem Ipsum</h3>
                    <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores, ipsa.
                    </p>
                </div>
            </div>
        </div>
    )
}