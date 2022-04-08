import * as React from 'react';
import Accent from 'components/Accent';
import ParticleBackground from 'components/ParticleBackground';
import InfoCard from 'components/InfoCard'
import FadeIn from 'react-fade-in';
import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll";
import Head from 'next/head'

import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { IoArrowDownOutline } from 'react-icons/io5';

import { ParentGrid, GridTwelve, GridEight, GridSeven, GridSix, GridFive, GridFour } from 'components/Grid';

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
      <Head>
        <title>Alessandro Figo | About</title>
        <meta name="description" content="Made with love by Figo 💘" />
        <link rel="icon" href="/f.png" />
      </Head>
      <FadeIn delay={120}>
        <div className="my-10 mx-8 md:mx-16 font-mono">
          <section className="min-h-screen">
            {/* <ParticleBackground/> */}
            <ParentGrid>
              <GridSeven className="mt-8 pt-5">
                <div className="text-2xl md:text-4xl font-bold mb-1">
                  Hello there <span className="wave">👋</span>
                </div>
                <div className="text-3xl md:text-5xl font-bold">
                  You can call me 
                  <span className="ml-4 md:ml-6 text-sky-800">
                    Figo
                  </span>
                </div>
                <div className="mt-5 text-lg">
                  <p>
                    I am currently exploring innovations in web3 and AI,
                    the two biggest tech transforming the future.
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
            <GridFour className="flex items-center justify-center">
              <img className="w-max mx-auto" src="/eth.gif"/>
            </GridFour>
            <GridEight>
              <div>
                <p className="mb-3">
                  Hey! My name is Figo. I am currently spending the semester at the University of Pennsylvania
                  for an exchange program studying CS and economics. I am fascinated with a wide variety of
                  topics including tech, microeconomics, game theory and philosophy. Just recently, I started
                  dedicating most of my time catching up with the innovation happening in crypto and begin to 
                  understand the value it will bring to the world. 🌎
                </p>
                <p>
                  These days in my free time, I try to increasingly be engaged with the web3 space by studying 
                  web3 development, participating in hackathons, being involved in DAOs, and catching up with
                  the bunch of things happening on crypto twitter. Prior to web3, I have always enjoyed building
                  front-ends and experimenting with new web development technologies. As for my university
                  studies, I focus on taking courses related with ML/AI and big data processing.
                </p>
              </div>
            </GridEight>
          </ParentGrid>

          {/* <ParentGrid className="mb-5">
            <GridTwelve>
              <div className="text-xl md:text-2xl font-bold mb-2">
                Favorite Tech Stack
              </div>
              <div className="text-lg md:text-xl mb-2">
                <i>Web3 Development</i>
              </div>
              <div className="text-lg md:text-xl">
                <i>AI/Big Data</i>
              </div>
            </GridTwelve>
          </ParentGrid> */}

          <ParentGrid>
            <GridTwelve>
              <div className="text-xl md:text-2xl font-mono font-bold mb-2">
                Contact
              </div>
              <p className="font-mono">
                Always down for any kind of conversation with anyone! Please always feel free to
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