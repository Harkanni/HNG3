
import UploadWrapper from "@/components/UploadWrapper"
import { currentUser } from '@clerk/nextjs/app-beta';


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

const Upload = async () => {
   const user = await currentUser()
   
   return (
      <>
         <UploadWrapper 
            avatar={user?.imageUrl}
            username={user?.firstName}
            userId={user?.id}
         />
      </>
   )
}

export default Upload
