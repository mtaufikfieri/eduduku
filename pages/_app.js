import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
