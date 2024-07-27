import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQK6YU0S8csBc2CLJB_ERxOe9a6rPnzTo",
  authDomain: "crwn-clothing-db-1d975.firebaseapp.com",
  projectId: "crwn-clothing-db-1d975",
  storageBucket: "crwn-clothing-db-1d975.appspot.com",
  messagingSenderId: "86117440173",
  appId: "1:86117440173:web:dc03cf9fd5024250f24424"
};
  
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

const db = getFirestore();

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log('done');
};

const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});


  return categoryMap;
};

const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (err) {
      console.warn('Error creating the user: ', err.message);
    }
  }

  return userDocRef;
};

const createAunthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInAunthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

const sighOutUser = async () => await signOut(auth);

const onAuthStateChangedListener = (cb) => {
  onAuthStateChanged(auth, cb)  
}

export { 
  auth, 
  signInWithGooglePopup,
  signInWithGoogleRedirect, 
  db,
  createUserDocumentFromAuth, 
  createAunthUserWithEmailAndPassword,
  signInAunthUserWithEmailAndPassword,
  sighOutUser,
  onAuthStateChangedListener,
  getCategoriesAndDocuments,
};
