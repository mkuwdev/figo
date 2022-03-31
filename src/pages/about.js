import * as React from 'react';
import Accent from 'components/Accent';
import FadeIn from 'react-fade-in';

import { ParentGrid, GridEight, GridFour } from 'components/Grid';

const about = () => {
  return (
    <main>
      <FadeIn delay={120}>
        <div className="my-10 mx-8 md:mx-16">
          <div className="text-xl md:text-2xl font-bold mb-1">
            About
          </div>
          <Accent className="text-3xl md:text-4xl font-bold">
            Alessandro Figo Saleh
          </Accent>
          <ParentGrid className="mt-5">
            <GridEight>
              <div>
                <p>Intro text here</p>
              </div>
            </GridEight>
            <GridFour>
              <img className="w-max mx-auto" src="/eth.gif"/>
            </GridFour>
          </ParentGrid>
        </div>
        <div className="my-10 mx-8 md:mx-16">
          <div className="text-xl md:text-2xl font-bold mb-2">
            Tech Stack
          </div>
          <p>Tech stack here</p>
        </div>
        <div className="my-10 mx-8 md:mx-16">
          <div className="text-xl md:text-2xl font-bold mb-2">
            Contact
          </div>
          <p>
            I am always down for any kind of conversation topic with anyone!
            Please always feel free to reach out to me for any questions you may have about me, web3, AI, or anything else really. All of my contacts are
            down in the footer 👇
          </p>
        </div>
      </FadeIn>
    </main>
  )
}

export default about