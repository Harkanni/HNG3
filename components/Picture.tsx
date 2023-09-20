import React from 'react'
import Image from "next/image"


interface Props {
   username: string | null;
   userId: string,
   image: string,
   imageDesc?: string,
   profilePicture?: string
   tags: string[],
}

const Picture = ({ username, userId, image, imageDesc, profilePicture, tags, }: Props) => {
   // console.log("this is the props image: ", image)
   return (
      <div>
         <img
            src={`${image}`}
            alt='Image'
            width={350}
            height={350}
         />
      </div>
   )
}

export default Picture
