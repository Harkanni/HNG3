import { folder, img, logo } from '@/assets'
import React from 'react'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const Upload = () => {
   return (
      <div className='h-[100vh] w-[100%]'>
         <div className='w-[95%] h-[60%] border rounded-xl m-auto mt-5 flex gap-3 items-center justify-center flex-col'>
            <Image
               src={folder}
               alt='Folder'
               width={24}
               height={24}
            />
            <p>Drag and drop image to upload or</p>
            <p>Drag files here to add items to your repository or</p>
            <span className='text-cyan-700 cursor-pointer'> choose from files </span>
         </div>

         <div className='w-[95%] rounded-xl m-auto mt-10 flex justify-center'>
            <div className='flex-[0.05] flex justify-center items-start rounded-lg'>
               <Image
                  src={img}
                  alt='userImage'
                  width={25}
                  height={25}
                  className='rounded-lg'
               />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
               <Input type="text" placeholder="Add some #Tags buddy!" className='bg-black' />
               <Textarea placeholder="You can add some descriptions, we don't judge" className='bg-black'/>
            </div>
         </div>
      </div>
   )
}

export default Upload
