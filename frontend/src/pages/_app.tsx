import React from 'react'
import './global.css'



export default function App({ Component, pageProps }: {Component: any, pageProps: any}) {
    return <Component {...pageProps} />
    }