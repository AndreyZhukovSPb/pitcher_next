import Head from "next/head";
import "normalize.css/normalize.css";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/fonts.css";
import '../styles/global.css'
import Layout from "../components/Layout";
import YandexMetrika from '../utils/yandexMetrika'

import React from "react";

export default function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Specialty coffee</title>
        <link rel="icon" href="/favicon.ico/" sizes="any" lang="RU"/>
        <YandexMetrika />
      </Head>
      <ScrollToTop />
      <div className='page'>
        <Layout>        
          <Component 
            {...pageProps} 
          />
        </Layout>
      </div>

      
    </>
  );
}


/*
слайдер как устанваливается высота
переделать тач для слайдера
картинки инсты уменьшать на бэке
тег picture
подумать про отсуты
*/