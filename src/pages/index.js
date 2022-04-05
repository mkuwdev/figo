import * as React from 'react';
import Accent from 'components/Accent';
import ParticleBackground from 'components/ParticleBackground';
import InfoCard from 'components/InfoCard'
import FadeIn from 'react-fade-in';
import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll";

import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { IoArrowDownOutline } from 'react-icons/io5';

import { ParentGrid, GridTwelve, GridEight, GridSeven, GridFive, GridFour } from 'components/Grid';

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
          <section className="mt-10 min-h-screen">
            {/* <ParticleBackground/> */}
            <ParentGrid>
              <GridSeven className="mt-10 pt-5">
                <div className="text-2xl md:text-4xl font-bold mb-1">
                  Hello there <span className="wave">👋</span>
                </div>
                <div className="text-4xl md:text-6xl font-bold">
                  You can call me 
                  <span className="ml-2 text-sky-800">
                    Figo
                  </span>
                </div>
                <div className="mt-5 text-lg">
                  <p>
                    Short Introduction here
                  </p>
                </div>
                <Link 
                  to='intro'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  <button className="mt-5 bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded transition ease-in-out hover:scale-105">
                    Learn more about me
                  </button>
                </Link>
                <div className='flex mt-3 mb-20'>
                  {socials.map((social) => (
                    <div key={social.key}>
                      <button className='rounded-sm align-top mr-4 text-gray-600 hover:text-sky-800'>
                        <a className="flex align-top" href={social.href} target="_blank" rel="noreferrer">
                          <div className="mr-1">
                            <social.icon className='h-5 w-5 mt-0.5' />
                          </div>
                          <div>{social.username}</div>
                        </a>
                      </button>
                    </div>
                  ))}
                </div>
              </GridSeven>
              <GridFive className="hidden lg:flex flex items-center justify-center">
                <InfoCard/>
              </GridFive>
            </ParentGrid>
            <div className="flex items-center justify-center">
              <div className="px-auto align-middle cursor-pointer hover:text-sky-800 transition ease-in-out hover:scale-110">
                <Link 
                  to='intro'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  <IoArrowDownOutline className='h-8 w-8 animate-bounce md:h-10 md:w-10 align-middle'/>
                </Link>
              </div>
            </div>
          </section>
          <ParentGrid>
            <GridTwelve>
              <div id="intro" className="text-xl md:text-2xl font-bold mb-1">
                About
              </div>
              {/* <Accent className="text-3xl md:text-4xl font-bold">
                Alessandro Figo Saleh
              </Accent> */}
              <div className="text-3xl md:text-4xl font-bold text-sky-800">
                Alessandro Figo Saleh
              </div>
            </GridTwelve>
          </ParentGrid>
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
          <ParentGrid>
            <GridTwelve>
              <div className="text-xl md:text-2xl font-bold mb-2">
                Tech Stack
              </div>
              <p>Tech stack here</p>
              <div className="text-xl md:text-2xl font-bold mt-5 mb-2">
                Contact
              </div>
              <p>
                I am always down for any kind of conversation topic with anyone! Please always feel free to
                reach out to me for any questions you may have about me, web3, AI, or anything else really.
                All of my contacts are down in the footer 👇
              </p>
            </GridTwelve>
          </ParentGrid>
        </div>
      </FadeIn>
    </main>
  )
}

export default about