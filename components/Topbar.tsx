'use client'

import React, { useState, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import '@/app/navbar.css'
import { logo } from '@/assets'
import Image from 'next/image'
import { Input } from './ui/input'

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

const Navbar = ({ username, handleSearch }: any) => {
   // console.log("this is navs avatar: ", avatar)

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
                  className='gpt3__navbar-sign'
               />
            </div>

         </div>

         <div className='lg:w-[40%]'>
            <Input
               className='bg-black w-full'
               // value={searchQuery}
               onKeyDown={(e) => { handleSearch(e) }}
               onChange={(e) => { handleSearch(e) }}
               placeholder='Search for images with tags, siri dey for you.....'
            />
         </div>

         <div className='gpt3__navbar-sign'>
            <p>Welcome <span className='text-red-600'> {username} </span></p>
            <button type='button'>
               <Menu />
            </button>
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
                     <div className='gpt3__navbar-menu_container-links-sign'>
                        <button type='button'><Menu /></button>
                        M</div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Navbar
