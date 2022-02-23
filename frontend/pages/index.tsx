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
                <p className={styles.description}>Welcome to the 90s.</p>
            </main>
        </div>
    )
}

export default Home
