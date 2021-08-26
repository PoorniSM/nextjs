import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <>
    <Head>
      <title>Marketplace | Home </title>
      <metadata name="keywords" content="Marketplace" />
    </Head>
    <div className={styles.container}>Main page</div>
    </>
  )
}
export default Home;