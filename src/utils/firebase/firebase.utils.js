import {initializeApp} from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAgNFjOB_A_4pDMUhKwpwh8W5P882Ffh4",
  authDomain: "denz-shop-db.firebaseapp.com",
  projectId: "denz-shop-db",
  storageBucket: "denz-shop-db.appspot.com",
  messagingSenderId: "178021072938",
  appId: "1:178021072938:web:e5fdd5c7f8e949e62cc353"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = new getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}