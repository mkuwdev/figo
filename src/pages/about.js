import * as React from 'react';
import Accent from 'components/Accent';
import FadeIn from 'react-fade-in';
import Image from 'next/image'

import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import { ParentGrid, GridEight, GridFour } from 'components/Grid';

const socials = [
  {
    href: 'https://twitter.com/mkuw_',
    icon: SiTwitter,
    key: 'Twitter',
    username: '@mkuw_'
  },
  {
    href: 'https://github.com/mkuwdev',
    icon: SiGithub,
    key: 'Github',
    username: 'mkuwdev'
  },
  // {
  //   href: 'https://linkedin.com/in/alessandrofigo',
  //   icon: SiLinkedin,
  //   key: 'Linkedin',
  //   username: 'alessandrofigo'
  // },
]

const about = () => {
  return (
    <main>
      <FadeIn delay={120}>
        <div className="my-10 mx-8 md:mx-16">
          <section className="mt-20 min-h-screen">
            <div className="text-2xl md:text-4xl font-bold mb-1">
              Hello there 👋
            </div>
            <div className="text-4xl md:text-6xl font-bold">
              You can call me 
              <span className="ml-2 text-sky-800">
                Figo
              </span>
            </div>
            <div className="mt-5 text-lg">
              <p>Short introduction here</p>
            </div>
            <button className="mt-5 bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded transition ease-in-out hover:scale-105">
              Learn more about me
            </button>
            <div className='flex mt-3'>
              {socials.map((social) => (
                <div key={social.key}>
                  <button className='rounded-sm align-top mr-4 text-gray-600 hover:text-sky-800'>
                    <div className="flex align-top">
                      <a className="mr-1" href={social.href} target="_blank" rel="noreferrer">
                        <social.icon className='h-5 w-5 mt-0.5' />
                      </a>
                      <div>{social.username}</div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
          <div className="text-xl md:text-2xl font-bold mb-1">
            About
          </div>
          <Accent className="text-3xl md:text-4xl font-bold">
            Alessandro Figo Saleh
          </Accent>
          <ParentGrid className="mt-5">
            <GridFour>
              <img className="w-max mx-auto" src="/eth.gif"/>
            </GridFour>
            <GridEight>
              <div>
                <p>Intro text here</p>
              </div>
            </GridEight>
            
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