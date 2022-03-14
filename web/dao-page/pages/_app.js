// import '../styles/globals.css'
import Layout from '../comps/Layout'
import '../styles/mainStyle.css'
import {useEffect,useState,createContext}  from 'react'
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const x= "13fdsfds";

  return (
    <NextUIProvider>
            <Head>
      <link rel="shortcut icon" href="/favicon.png" />
        <title>Maelstrom DAO</title>
        
      </Head>
      <Layout>
        <Component {...pageProps}  />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
