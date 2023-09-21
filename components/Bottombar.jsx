// 'use client'

import { facebook, instagram, twitter, youtube } from "@/assets"
import Image from "next/image"

const Bottombar = () => {
  return (
    <div className="mt-10 my-5 flex flex-col justify-center items-center">
      <div className="socials flex gap-7">
         <Image
            src={facebook}
            alt="facebook"
            width={24}
            height={24}
         />
         <Image
            src={instagram}
            alt="instagram"
            width={24}
            height={24}
         />
         <Image
            src={twitter}
            alt="twitter"
            width={24}
            height={24}
         />
         <Image
            src={youtube}
            alt="facebook"
            width={24}
            height={24}
         />
      </div>

      <div className="conditons flex gap-5 my-5">
         <p>Conditions of Use</p>
         <p>Privacy & Policy</p>
         <p>Press Room</p>
      </div>

      <div className="copyright">
         <p>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
      </div>
    </div>

  )
}

export default Bottombar
