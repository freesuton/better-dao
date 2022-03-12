// import '../styles/globals.css'
import Layout from '../comps/Layout'
import '../styles/mainStyle.css'
import {useEffect,useState,createContext}  from 'react'

function MyApp({ Component, pageProps }) {
  const x= "13fdsfds";

  return (
    <Layout>
      <Component {...pageProps}  />
    </Layout>
  )
}

export default MyApp
