import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About me</title>
                <meta name="description" content="A web app about me built with Next.js"/>
            </Head>
            <main className={styles.main}>
                <h2 className={styles.titleThree}>Lorem Ipsum Dolor</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    consectetur dolorem quibusdam rerum. Assumenda at, aut deserunt iure iusto natus!Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Alias
                    consectetur dolorem quibusdam rerum. Assumenda at, aut deserunt iure iusto natus!</p>
                <h2 className={styles.titleTwo}>Lorem Ipsum Dolor</h2>
                <p className={styles.descriptionTwo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    consectetur dolorem quibusdam rerum. Assumenda at, aut deserunt iure iusto natus!Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Alias
                    consectetur dolorem quibusdam rerum. Assumenda at, aut deserunt iure iusto natus!</p>
                <h2 className={styles.titleThree}>Lorem Ipsum Dolor</h2>
                <p className={styles.descriptionThree}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias
                    consectetur dolorem quibusdam rerum. Assumenda at, aut <span className={styles.emphasis}>iusto
                        natus!</span>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Alias
                    consectetur dolorem quibusdam rerum. Assumenda at, aut deserunt iure iusto natus!
                </p>
            </main>
        </div>
    )
}

export default Home
