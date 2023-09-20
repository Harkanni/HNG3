'use client'

import Topbar from '@/components/Topbar'
import { getPictures } from '@/lib/actions/index'
import Picture from './Picture';
import NotFound from './NotFound';


const MainWrapper = async ({ gallery, username }: any) => {
   // console.log(gallery);
   // console.log(username);
   
   interface galleryInterface {
      username: string | null;
      userId: string,
      image: string,
      imageDesc?: string,
      profilePicture?: string
      tags: string[],
   }

   return (
      <div>
         <Topbar username={username} />

         <main className="flex flex-row">
            <section className="main-container m-auto">
               {
                  gallery.length ? (
                     <div className="w-full max-w-6xl flex flex-wrap gap-5 justify-betwee">
                        {
                           gallery.map((galleryItem: galleryInterface, index: number) => (
                              <Picture key={index} {...galleryItem} />
                           ))
                        }
                     </div>
                  ) : (
                     <NotFound />
                  )
               }


            </section>
         </main>
      </div>
   )
}

export default MainWrapper
