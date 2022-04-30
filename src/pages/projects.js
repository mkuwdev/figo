import React from 'react'
import FadeIn from 'react-fade-in';
import Link from 'next/link'
import Head from 'next/head'

const projects = () => {
  return (
    <FadeIn>
      <Head>
        <title>Alessandro Figo | Projects</title>
        <meta name="description" content="Made with love by Figo 💘" />
        <link rel="icon" href="/f.png" />
      </Head>
      <div className="flex flex-col justify-center items-center font-mono py-32 px-10">
        <div className="text-3xl font-bold mb-5">
          Projects
        </div>
        <div className="text-xl font-inter">
          page under construction! Stay tuned <Link href={'/about'}>👷‍♂️</Link>
        </div>
      </div>
    </FadeIn>
  )
}

export default projects