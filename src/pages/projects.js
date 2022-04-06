import React from 'react'
import FadeIn from 'react-fade-in';
import Link from 'next/link'

const projects = () => {
  return (
    <FadeIn>
      <div className="flex flex-col justify-center items-center font-mono py-32 px-10">
        <div className="text-3xl font-bold mb-5">
          Projects
        </div>
        <div className="text-xl">
          page under construction! Stay tuned <Link href={'/about'}>👷‍♂️</Link>
        </div>
      </div>
    </FadeIn>
  )
}

export default projects