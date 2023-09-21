import ImgContainer from "./ImgContainer"

type Props = {
   topic?: string | undefined,
   page?: string | undefined,
}

export default async function Gallery({ topic = 'curated', page, photosWithBlur }: any) {
   return (
      <>
         <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">

            {photosWithBlur.map((photo: any) => (
               <ImgContainer key={photo.id} photo={photo} />
            ))}

         </section>
      </>
   )
}