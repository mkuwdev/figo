import clsx from 'clsx';
import * as React from 'react';
import Accent from 'components/Accent';

const about = () => {
  return (
    <main>
      <div className="my-10 mx-8 md:mx-16">
        <div className="text-xl md:text-2xl font-bold mb-1">
          About
        </div>
        <Accent className="text-3xl md:text-4xl font-bold">
          Alessandro Figo Saleh
        </Accent>
        <div className="mt-5">
          <p>he</p>
        </div>
      </div>
      <div className="my-10 mx-8 md:mx-16">
        <div className="text-xl md:text-2xl font-bold mb-2">
          Tech Stack
        </div>
        <p>Tech stack here</p>
        <img className="h-10" src="/eth.gif"/>
      </div>
      <div className="my-10 mx-8 md:mx-16">
        <div className="text-xl md:text-2xl font-bold mb-2">
          Contact
        </div>
        <p>
          I am always down for any kind of conversation topic with anyone!
          Please always feel free to reach out to me for any questions you may have about me, web3, AI, or anything else really. All of my contacts are
          down in my footer 👇
        </p>
      </div>
    </main>
  )
}

export default about