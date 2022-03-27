import React from 'react'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

import { PreloadProvider } from 'context/PreloadContext';

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
            <PreloadProvider>
                <div id='skip-nav'>{children}</div>
            </PreloadProvider>
        <Footer />
    </>
  )
}

export default Layout