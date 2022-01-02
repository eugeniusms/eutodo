import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies nulla fermentum pellentesque tincidunt. Duis cursus mattis convallis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies nulla fermentum pellentesque tincidunt. Duis cursus mattis convallis.</p>
      <Footer />
    </div>
  )
}
