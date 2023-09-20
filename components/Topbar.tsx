'use client'

import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


import '@/app/navbar.css'
import { logo } from '@/assets'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs'

// BEM => BLOCK ELEMENT MODIFIER

// TODO: REMOVE THIS
const Menu = () => {
   return (
      <>
         <p><a href="/upload">Upload file</a></p>
         {/* <p><a href="#wgpt3">What is GPT?</a></p>
         <p><a href="#features">Open AI</a></p>
         <p><a href="#possibility">Case Studies</a></p>
         <p><a href="#blog">Library</a></p> */}
      </>
   )
}

const Navbar = ({ avatar }: { avatar: string | any }) => {
   console.log("this is navs avatar: ", avatar)

   const [toggleMenu, setToggleMenu] = useState(false)
   return (
      <div className='gpt3__navbar'>
         <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links_logo'>
               <Image
                  src={logo}
                  alt='logo'
                  width={200}
                  height={200}
               />
            </div>

         </div>
         <div className='gpt3__navbar-sign'>
            <p>Welcome Akanni</p>
            <Menu />
            <button type='button'>Log out</button>
         </div>
         <div className='gpt3__navbar-menu'>
            {toggleMenu ?
               <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
               : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
               <div className='gpt3__navbar-menu_container scale-up-center'>
                  <div className='gpt3__navbar-menu_container-links'>
                     <p>Welcome Akanni</p>
                     <Menu />
                     <div className='gpt3__navbar-menu_container-links-sign'>
                        <button type='button'>Log out</button>
                     M</div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Navbar
