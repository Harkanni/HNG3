import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db, app } from '@/lib/firebase/initialize';
import { revalidatePath } from 'next/cache'

export const uploadPicture = async (data, path) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
    console.log('path: ', path);
    revalidatePath(path)
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getPictures = async (id) => {
  const result = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    result.push(doc.data());
  });

  return result;
};
