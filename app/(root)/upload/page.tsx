'use client'

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { folder, img, logo } from '@/assets'
import React from 'react'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const Upload = () => {
   const [base64Image, setBase64Image] = useState<string | null>(null);
   const [isCool, setisCool] = useState<boolean | string>('wait');
   const [tag, setTag] = useState<boolean | string>('');

   const onDrop = useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      console.log(acceptedFiles);

      if (file.type.includes("image")) {
         const reader = new FileReader();
         reader.onload = (event) => {
            if (event.target) {
               const base64 = event.target.result as string;
               setBase64Image(base64);
               setisCool(true);

               // TODO: UPLOD TO FIRESTORE
            }
         };
         reader.readAsDataURL(file);
      }
   }, []);

   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: { 'image/*': ['.jpeg', '.png'], 'video/mp4': ['.mp4', '.MP4'] }, // Accept only image files
      maxFiles: 1, // Limit the number of files to 1
    });

   const handleClick = () => {
      console.log("Ready to upload...");
   }
   return (
      <div className='h-[100vh] w-[100%]'>
         <div {...getRootProps()} className='dropzone overflow-hidden w-[95%] h-[60%] border rounded-xl m-auto mt-5 flex gap-3 items-center justify-center flex-col'>
            <input {...getInputProps()} />
            {base64Image ? (
               <div className='w-full h-full'>
                  <img
                     src={base64Image}
                     alt="Selected Image"
                     className='w-full h-full object-contain'
                  />
               </div>
            ) : (
               <>
                  <Image
                     src={folder}
                     alt='Folder'
                     width={24}
                     height={24}
                  />
                  <p>Drag and drop image to upload or</p>
                  <p>Drag files here to add items to your repository or</p>
                  <span className='text-cyan-700 cursor-pointer'> choose from files </span>
               </>
            )}

         </div>
         {isCool !== "wait" && (isCool ? <div className='w-[95%] m-auto mt-5 text-green-500'>Cool bro!!</div> : <div className='w-[95%] m-auto mt-5 text-red-500'>Not cool bro, you sure that's an image???</div>)}

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
               <Input type="text" placeholder="Add some #Tags buddy!" className='bg-black' onChange={(e) => {setTag(e.target.value)}} />
               <Textarea placeholder="You can add some descriptions too, we don't judge" className='bg-black' />
               <div className=' bg-green-700 p-3 mb-5 rounded-lg'>
                  <button className='w-full' onClick={handleClick}>
                     Upload Image
                  </button>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Upload
