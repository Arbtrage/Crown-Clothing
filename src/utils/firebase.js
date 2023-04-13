import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCELv730xjX0edSmzFfVxBtJPP1glLPT1k",
    authDomain: "react-1be3f.firebaseapp.com",
    projectId: "react-1be3f",
    storageBucket: "react-1be3f.appspot.com",
    messagingSenderId: "818713521897",
    appId: "1:818713521897:web:05e0fa8ff1910ba7b28a78"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth =getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


export const db=getFirestore();
export const createUserDocumentFromAuth=async(userAuth,additionalInformation={})=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot=await getDoc(userDocRef);
    
    //if user data does not exists
    // create/set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("Error creating the user",error.message);
        }
    }

    //if user data exists
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return ;

    return await createUserWithEmailAndPassword(auth,email,password);

}
export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
export const signOutUser=async()=>signOut(auth);