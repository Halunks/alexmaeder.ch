import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../compositions/Hero";
import Pictures from "../compositions/Pictures";
import Story from "../compositions/Story";
import Header from "../components/Header";

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
                {/*<Banner/>*/}
                <Header/>
                <Hero/>
                <Pictures/>
                <Story/>
            </main>
        </div>
    )
}

export default Home
