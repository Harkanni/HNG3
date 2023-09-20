import MainWrapper from '@/components/MainWrapper';
import { currentUser } from '@clerk/nextjs/app-beta';
import React from 'react'

export default async function Home() {
   const user = await currentUser();
   if (!user) return null;
   
   // const userInfo = await fetchUser(user.id);
   // console.log('THIS IS THE',userInfo)
   // if (!userInfo?.onboarded) redirect("/onboarding");
   
   // const result = await fetchThreads(1, 20);


  return (
    <MainWrapper />
  )
}

