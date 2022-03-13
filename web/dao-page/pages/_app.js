// import '../styles/globals.css'
import Layout from '../comps/Layout'
import '../styles/mainStyle.css'
import {useEffect,useState,createContext}  from 'react'
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  const x= "13fdsfds";

  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps}  />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
