import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Massage from "../model/massage"

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxime Leray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Vous etes sur test</div>
        <Link href="/">Lien vers accueil</Link>
          <ul>
              {massages.list.map((massage: Massage) => (
                  <li key={massage.name} className="">
                      <Link href={`/massage/${massage.path}`}>{massage.name}</Link>
                  </li>
              ))
          }
          </ul>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
