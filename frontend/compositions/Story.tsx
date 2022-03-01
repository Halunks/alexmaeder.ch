import styles from './Story.module.css'
import placeholder from '../public/images/alex-maeder.jpg'
import Image from 'next/image'

export default function Story() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Lorem Ipsum</h2>
            <div className={styles.container}>
                <div className={styles.blockWrapper}>
                    <div className={styles.textWrapper}>
                        <h4 className={styles.blockTitle}>
                            Ipsum Lorem
                        </h4>
                        <p className={styles.blockParagraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            dolore ex illo molestiae. Blanditiis deserunt dignissimos eaque iusto mollitia quod!</p>
                    </div>
                    <div className={styles.imgWrapper}>
                        <Image className={styles.image} src={placeholder}/>
                    </div>
                </div>
            </div>
        </section>
    )
}