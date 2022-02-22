import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ego Sum</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello World! <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>
        </div>
    )
}

export default Home
