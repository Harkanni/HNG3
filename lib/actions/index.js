import { collection, getDocs, addDoc } from 'firebase/firestore';

export const uploadPicture = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getPictures = async (id) => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
