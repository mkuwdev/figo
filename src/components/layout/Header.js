import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "FIGO.",
    "MKU.ETH"
];

const Header = () => {

    const router = useRouter()
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        8000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const NavItem = ({ url, name, current }) => {

    const highlighted = router.pathname == current

    return (
        <Link href={url}>
            <a
            href={url}
            className={clsx('px-3 py-1 cursor-pointer', {
                'text-black border-b-4 border-sky-800': highlighted,
                'link link-underline link-underline-grey': !highlighted
            })}
            aria-current={highlighted ? 'page' : undefined}
            >
            {name}
            </a>
        </Link>
        )
    }

  const NavItems = () => {
    
    
    const links = [
        { key: "1", href: '/', label: 'About' },
        { key: "2", href: '/blogs', label: 'Blogs' },
        { key: "3", href: '/projects', label: 'Projects' },
        // { href: '/library', label: 'Library' },
    ];

    return (
      <>
        {links.map(({ href, label, key }) => (
            <div key={key}>
              <NavItem
                url={href}
                name={label}
                current={href}
              />
            </div>  
        ))}
      </>
    )
  }

  return (
    <nav className="sticky top-0 z-10 w-full bg-white border-b drop-shadow-sm border-t-4 border-t-teal-400 mb-3">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="relative flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center justify-start flex-1">
            {/* <div className="flex items-center flex-shrink-0 space-x-3">
              <Link href="/">
                <a href="/">
                  <div className="text-3xl font-black">
                    <img className="h-10" src="/mku.png" alt="Logo" />
                  </div>
                </a>
              </Link>
            </div> */}
            
            <div className="flex items-center space-x-4">
                <NavItems />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-5 pr-2 sm:static sm:inset-auto sm:pr-0 sm:ml-6">
            <div className="m-4 flex justify-between">
              <div className="flex space-between align-bottom items-center">
                <div className="text-3xl font-bold text-sky-800 w-32 px-3 flex items-center cursor-pointer">
                    <span className="link link-underline link-underline-black">
                      <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.gentle }
                      />
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header