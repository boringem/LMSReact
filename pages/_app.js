import React from 'react'
import App, { Container } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/font-awesome-svg-core/styles.css' // import the css
config.autoAddCss = false 

export default function ElearnApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}