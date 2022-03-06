import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../compositions/Hero";
import Pictures from "../compositions/Pictures";
import Header from "../components/Header";
import Story from "../compositions/Story";
import Techstack from "../compositions/Techstack";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lorem</title>
                <meta name="description" content="A web app about me built with Next.js"/>
            </Head>
            <div className={styles.noise}>
            </div>
            <main className={styles.main}>
                {/*<Banner/>*/}
                <Header/>
                <Hero/>
                <Pictures/>
                <Story/>
                <Techstack/>
                <Footer/>
            </main>
        </div>
    )
}

export default Home
