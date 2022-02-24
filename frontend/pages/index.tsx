import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.noise}>
                <Head>
                    <title>Lorem</title>
                    <meta name="description" content="A web app about me built with Next.js"/>
                </Head>
                <main className={styles.main}>

                </main>
            </div>
        </div>
    )
}

export default Home
