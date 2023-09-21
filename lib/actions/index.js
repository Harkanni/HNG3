import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { db, app } from '@/lib/firebase/initialize';
import { revalidatePath } from 'next/cache';

export const uploadPicture = async (data, path) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
    console.log('path: ', path);
    revalidatePath(path);
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

export const searchForPictureByTag = async (tag) => {
   const result = [];
  const q = query(collection(db, 'users'), where('tags', 'array-contains', tag));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
    result.push(doc.data());
  });

  return result;
};
