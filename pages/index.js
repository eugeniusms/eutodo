import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>EuTodo List | Home</title>
      <meta name="keywords" content="todo"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies nulla fermentum pellentesque tincidunt. Duis cursus mattis convallis.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies nulla fermentum pellentesque tincidunt. Duis cursus mattis convallis.</p>
      <Link href="/todo">
        <a className={styles.btn}>See Todolist</a>
      </Link>
    </div>
    </>
  )
}
