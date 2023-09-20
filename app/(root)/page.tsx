import MainWrapper from '@/components/MainWrapper';
import { getPictures } from '@/lib/actions';
import { currentUser } from '@clerk/nextjs/app-beta';
import React from 'react'

export default async function Home() {
   const user = await currentUser();
   if (!user) return ("/sign-in");
   

   const Gallery = await getPictures(user.id);   



  return (
    <MainWrapper gallery={Gallery} username={user.username} />
  )
}

