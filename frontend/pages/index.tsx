import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../compositions/Hero";
import Techstack from "../compositions/Techstack";
import Pictures from "../compositions/Pictures";
import Story from "../compositions/Story";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className={styles.bodyWrapper}>
            <Head>
                <title>alex maeder</title>
                <meta name="description" content="A web app created with Next.js about me"/>
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
