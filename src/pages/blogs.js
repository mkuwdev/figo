import React from 'react'
import FadeIn from 'react-fade-in';

const blogs = () => {
  return (
    <FadeIn>
      <div className="flex flex-col justify-center items-center font-mono py-32 px-10">
        <div className="text-3xl font-bold mb-5">
          Blogs
        </div>
        <div className="text-xl">
          No blogs yet!
        </div>
      </div>
    </FadeIn>
  )
}

export default blogs