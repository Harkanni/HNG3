import React, { useEffect } from 'react'
import Image from "next/image"


// interface Props {
//    id: number,
//    username: string | null;
//    userId: string,
//    image: string,
//    imageDesc?: string,
//    profilePicture?: string
//    tags: string[],
//    data: object[],
//    setGalleryData: any
// }

const Picture = ({ data }: any) => {
   
   const [galleryData, setGalleryData] = React.useState(data)
   const [isDragOver, setIsDragOver] = React.useState<boolean>()
   const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null);
   const [dropTargetIndex, setDropTargetIndex] = React.useState<number | null>(null);


   useEffect(() => {
      setGalleryData(data)
   }, [data]);
   
   
   // save reference for gragItem and dragOverItem
   const dragItem = React.useRef<any>(null)
   const dragOveItem = React.useRef<any>(null)
   const imgRef = React.useRef<any>(null)

   

   const getImageSize = () => {
      
   }



   // const handle drag sorting
   const handleSort = () => {
      if (draggedIndex !== null && dropTargetIndex !== null) {
         const newData = [...data];
         
         // Swap the items using array destructuring
         [newData[draggedIndex], newData[dropTargetIndex]] = [newData[dropTargetIndex], newData[draggedIndex]];
         
         setGalleryData(newData);
       }
       setDraggedIndex(null);
       setDropTargetIndex(null);



      // if (draggedIndex !== null && dropTargetIndex !== null) {
      //    const newData = [...data];
      //    const [draggedItem] = newData.splice(draggedIndex, 1);
      //    newData.splice(dropTargetIndex, 0, draggedItem);
      //    setGalleryData(newData);
      //  }
      //  setDraggedIndex(null);
      //  setDropTargetIndex(null);



      // // Create a shallow copy of the data array
      // const newData = [...data];
    
      // // Remove the dragged item from its original position
      // const [draggedItem] = newData.splice(dragItem.current, 1);
    
      // // Insert the dragged item at its new position
      // newData.splice(dragOveItem.current, 0, draggedItem);
    
      // // Update the state with the sorted data
      // setGalleryData(newData);
    
      // // Reset the drag item references and drag over state
      // dragItem.current = null;
      // dragOveItem.current = null;
      // setIsDragOver(false);
    
      // console.log("Updated gallery data:", newData);
    };
    


   // handle drag start
   const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
      console.log('Drag started: ', index)
      setDraggedIndex(index);
      setIsDragOver(true);
      dragItem.current = index
   }

   const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
      console.log('Drag enter: ', index)
      setIsDragOver(true);
      dragOveItem.current = index
   }

   const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
      console.log('Drag end: ')
      return handleSort()
   }


   ///// TO ANIMATE
   const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.preventDefault();

      if (draggedIndex === null || draggedIndex === index) return;
      setDropTargetIndex(index);
    };


   return (
      <>
         {
            galleryData.map((galleryItem: any, id: number) => (

               <div
                  key={id}
                  draggable
                  className={`${(dragOveItem.current && isDragOver )&& 'opacity-[.1]'}`}
                  onDragStart={(e) => onDragStart(e, id)}
                  onDragEnter={(e) => onDragEnter(e, id)}
                  onDragEnd={(e) => onDragEnd(e)}
                  onDragOver={(e) => {handleDragOver(e, id)}}
               >
                  <img
                     src={galleryItem.image}
                     alt='Image'
                     width={350}
                     height={350}
                     draggable
                  />
               </div>
            ))
         }
      </>
   )
}

export default Picture
