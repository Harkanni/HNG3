'use client'

import React, { use, useEffect, useId } from 'react'
import Image from "next/image"
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
   arrayMove,
   SortableContext,
   useSortable,
   verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import '@/app/generic.css'


const SortableImage = ({ imageContainer, id }: any) => {
   console.log("this is container:", imageContainer.tags)
   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id })

   const style = {
      transition,
      transform: CSS.Transform.toString(transform)
   }

   return (
      <div
         ref={setNodeRef} style={style} {...attributes} {...listeners}
         draggable
         className='h-[350px] imageContainer mb-4'
      >
         <div className='h-[100%] w-[100%]'>
            <img
               src={imageContainer.image}
               alt='Image'
               className='h-[100%] w-[100%] object-cover'
               draggable
            />
            <p className='inline italic font-bold'>
               {imageContainer.tags.map((tag: string, id: number) => {
                  tag = tag.toLowerCase() + " ";
                  tag = tag.charAt(0) !== "#" ? `#${tag}` : tag;
                  return (
                     <span className={`${id % 2 == 0 ? 'blue-text-gradient' : 'pink-text-gradient'}`}>{tag}</span>
                  )
               })}
            </p>

         </div>
      </div>
   )
}

const Picture = ({ data }: any) => {

   const idd = useId()
   const [galleryData, setGalleryData] = React.useState(data)

   useEffect(() => {
      setGalleryData(data)
   }, [data]);


   const onDragEnd = (event: any, id: any) => {
      console.log(event)
      const { active, over } = event

      console.log('this is data: ', data)

      setGalleryData((data: any) => {
         const oldIndex = data.findIndex((item: any, currIndex: number) => currIndex === active.id)
         const newIndex = data.findIndex((dt: any, currIndex: number) => currIndex === over.id)
         // console.log("id:",id, "idd:",idd, "activeID:",active.id, "OverId:",over.id)
         // console.log("oldIndex: ", oldIndex, "newIndex: ", newIndex)
         return arrayMove(data, oldIndex, newIndex)
      })
   }






   return (
      <>
         <DndContext id={idd} collisionDetection={closestCenter} onDragEnd={(e) => onDragEnd(e, idd)}>
            <SortableContext id={idd} items={galleryData} strategy={verticalListSortingStrategy}>
               {galleryData.map((galleryItem: any, id: number) => (
                  <SortableImage key={id} id={id} imageContainer={galleryItem} />
               ))
               }
            </SortableContext>
         </DndContext>
      </>
   )
}

export default Picture
