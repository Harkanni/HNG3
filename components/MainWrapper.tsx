import Topbar from '@/components/Topbar'
import { currentUser } from '@clerk/nextjs'
import { getPictures } from '@/lib/actions/index'
import { img } from '@/assets';
import Image from 'next/image';


const MainWrapper = async () => {
   async function getUserInfo() {
      const user = await currentUser();
      return user
   }

   async function getUserGallery(id: string) {
      const pictures = await getPictures(id);
      return pictures
   }

   const i=0

   const user = await getUserInfo();
   console.log("This is user info: ", user);
   return (
      <div>
         <Topbar avatar={user?.imageUrl} />

         <main className="flex flex-row">
            <section className="main-container m-auto">
               <div className="w-full max-w-6xl flex flex-wrap gap-5 justify-betwee">                  
                  <Image 
                     src={img}
                     alt='Image'
                     width={350}
                     height={350}
                  />
                  <Image 
                     src={img}
                     alt='Image'
                     width={350}
                     height={350}
                  />
                  <Image 
                     src={img}
                     alt='Image'
                     width={350}
                     height={350}
                  />
               </div>

               <div className="w-full max-w-6xl flex flex-col flex-wrap gap-5 items-center justify-center">
                  <p>YOU HAVE NO IMAGE IN YOUR GALLERY</p>
                  <p>Drag files here to add items to your repository or</p>
                  <span> choose from files </span>
               </div>
            </section>
         </main>
      </div>
   )
}

export default MainWrapper
