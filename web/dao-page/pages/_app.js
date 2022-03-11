// import '../styles/globals.css'
import Layout from '../comps/Layout'
import '../styles/mainStyle.css'
import {useEffect,useState}  from 'react'

function MyApp({ Component, pageProps }) {


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
