import React from 'react'
import FadeIn from 'react-fade-in';
import Head from 'next/head'

const blogs = () => {
  return (
    <FadeIn>
      <Head>
        <title>Figo | Blogs</title>
        <meta name="description" content="Made with love by Figo 💘" />
        <link rel="icon" href="/f.png" />
      </Head>
      <div className="flex flex-col justify-center items-center font-mono py-32 px-10">
        <div className="text-3xl font-bold mb-5">
          Blogs
        </div>
        <div className="text-xl font-inter">
          No blogs yet!
        </div>
      </div>
    </FadeIn>
  )
}

export default blogs