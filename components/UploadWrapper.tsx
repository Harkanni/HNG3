'use client'

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { folder, img, logo } from '@/assets'
import React from 'react'
import Image from 'next/image';
import { Textarea } from "@/components/ui/textarea"
import { uploadPicture } from '@/lib/actions';
import { usePathname, useRouter } from "next/navigation";

import { Chips, ChipsChangeEvent } from "primereact/chips";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';







const UploadWrapper = ({ avatar, username, userId }: { avatar: string | undefined, username: string | undefined | null, userId: string | null | undefined }) => {
   const [base64Image, setBase64Image] = useState<string | null>(null);
   const [isCool, setisCool] = useState<boolean | string>('wait');
   const [textarea, setTextarea] = useState('')
   const [chips, setChips] = useState<string[]>([]);
   const pathName = usePathname()
   const router = useRouter()
   
   const onDrop = useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      // console.log(acceptedFiles);

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

   const handleClick = async () => {
      console.log("Ready to upload...");

      try {
         if(isCool === true && base64Image) {
            const res = await uploadPicture({
               userId: userId,
               username: username,
               profilePicture: avatar,
               image: base64Image,
               imageDesc: textarea,
               tags: chips
            }, pathName)
   
            console.log("Upload done!..........");
            console.log("This is the result of the upload: ", res);

            router.push("/")
         }

         else {
            setisCool(false)
            alert("Gimme an image buddy...")
         }

      } catch (error) {
         console.log(error)
      }

   }

   const handleChipsChange = (newChips: string[] | null) => {
      // Handle the case where newChips is null (if needed)
      if (newChips === null) {
         // Handle null state (e.g., reset the state to an empty array)
         setChips([]);
      } else {
         // Update the state with the newChips array
         setChips(newChips);
      }
   };

   return (
      <PrimeReactProvider>

         <div className='h-[100vh] w-[100%]'>
            <div {...getRootProps()} className='dropzone overflow-hidden w-[95%] h-[60%] border rounded-xl m-auto mt-5 flex gap-3 items-center justify-center flex-col hover:border-green-900 hover:border-8 hover:cursor-pointer'>
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
            {isCool !== "wait" && (isCool ? <div className='w-[95%] m-auto mt-5 text-green-500'>Cool bro!!</div> : <div className='w-[95%] m-auto mt-5 text-red-500'>Not cool bro, you sure that's an image right there???</div>)}

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
                  {/* <Input type="text" placeholder="Add some #Tags buddy!" className='bg-black' /> */}
                  <span className="p-fluid p-float-label">
                     <Chips id='usertags' value={chips} onChange={(e: ChipsChangeEvent) => handleChipsChange(e.value)} className='chipInputField' keyfilter="alpha" />
                     <label htmlFor="usertags" className='text-white'>Tags</label>
                  </span>
                  <Textarea onChange={(e) => setTextarea((prev) => prev + e.target.value)} placeholder="You can add some descriptions too, we don't judge" className='bg-black' />
                  <div className=' bg-green-700 p-3 mb-5 rounded-lg'>
                     <button className='w-full' onClick={handleClick}>
                        Upload Image
                     </button>
                  </div>
               </div>
            </div>

         </div>
      </PrimeReactProvider>
   )
}

export default UploadWrapper
