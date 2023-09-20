'use client'

import { useRouter } from 'next/navigation'

const NotFound = () => {
   const router = useRouter()
   return (
      <div className="w-full max-w-6xl flex flex-col flex-wrap gap-5 items-center justify-center">
         <p>YOU HAVE NO IMAGE IN YOUR GALLERY</p>
         <span className='text-green-900 cursor-pointer' onClick={() => {router.push('/upload')}}> Add some images right here... </span>
      </div>
   )
}

export default NotFound
