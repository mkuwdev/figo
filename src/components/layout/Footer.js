import React from 'react'
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

const socials = [
  {
    href: 'mailto: alessandrofigo24@gmail.com',
    icon: FiMail,
    key: 'Mail',
  },
  {
    href: 'https://twitter.com/mkuw_',
    icon: SiTwitter,
    key: 'Twitter',
  },
  {
    href: 'https://github.com/mkuwdev',
    icon: SiGithub,
    key: 'Github',
  },
  {
    href: 'https://linkedin.com/in/alessandrofigo',
    icon: SiLinkedin,
    key: 'Linkedin'
  },
]

const Footer = () => {
  return (
    <footer className="px-10 mt-3">
      <main className='layout flex flex-col items-center border-t'>
        <p className='mt-4 font-medium text-gray-600'>
          Reach out to me 😊
        </p>
        <div className='mt-2 flex space-x-4'>
          <div className='flex items-center justify-center'>
            {socials.map((social) => (
              <div key={social.key}>
                <button className='rounded-sm align-middle mx-2 text-gray-400 hover:text-sky-800 transition ease-in-out hover:scale-110'>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <social.icon className='h-7 w-7 align-middle' />
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className='mt-5 mb-8 text-sm text-gray-600 items-center'>
          Made with 💘 by Alessandro Figo 2022
        </p>
      </main>
    </footer>
  )
}

export default Footer