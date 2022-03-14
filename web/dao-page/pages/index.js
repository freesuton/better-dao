import {useEffect,useState}  from 'react'

import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import MintPage from '../comps/MintPage'
import Nft from './nft'

export default function Home() {
  const [connected, setConnected] = useState(false);

  return (
    <>

      <Nft />
      
    </>
  )
}
