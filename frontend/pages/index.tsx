import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/Banner";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lorem</title>
                <meta name="description" content="A web app about me built with Next.js"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.noise}>
                </div>
                <Banner/>
            </main>
        </div>
    )
}

export default Home
