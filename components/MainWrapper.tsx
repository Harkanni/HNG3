'use client'

import Topbar from '@/components/Topbar'
import { getPictures, searchForPictureByTag } from '@/lib/actions/index'
import Picture from './Picture';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import Gallery from './tempGallery';


interface galleryInterface {
   username: string | null;
   userId: string,
   image: string,
   imageDesc?: string,
   profilePicture?: string
   tags: string[],
}

const PictureComponent = ({ data }: any) => {
   // console.log(data);

   return (
      <>
         {
            data?.length ? (
               <div className="w-full max-w-6xl flex flex-wrap gap-5 justify-center">
                  {
                     data.map((galleryItem: galleryInterface, index: number) => (
                        <Picture key={index} {...galleryItem} />
                     ))
                  }
               </div>
            ) : (
               <NotFound />
            )
         }

      </>
   )
}


const MainWrapper = ({ gallery, username }: any) => {
   const [searchQuery, setSearchQuery] = useState<any>()
   const [isLoading, setisLoading] = useState<boolean>(false)


   const handleSearch = async (e: any) => {
      setisLoading(true)
      // if(e.key === "Enter"){
      console.log("Searching...", e.target.value);
      const res = gallery.filter((item: any) => item.tags.includes(e.target.value) || item.imageDesc.includes(e.target.value))

      setSearchQuery(res);
      console.log("Searching done!...");

      
      setisLoading(false);
      console.log("This is the search result...", searchQuery);
   }

   return (
      <div>
         <Topbar username={username} handleSearch={handleSearch} />

         <main className="flex flex-row">
            <section className="main-container m-auto">
               {searchQuery ? <PictureComponent data={searchQuery} /> :
                  <PictureComponent data={gallery} />
               }
            </section>
         </main>
         
         <section>
            <Gallery photosWithBlur={gallery} />
         </section>
      </div>
   )
}

export default MainWrapper
