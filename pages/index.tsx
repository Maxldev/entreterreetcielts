import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxime Leray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Site en consttruction ...</div>
       <Link href="/test">Lien vers test</Link>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
