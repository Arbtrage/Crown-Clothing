import { createContext,useState,useEffect } from 'react'
import {onAuthStateChangedListener,createUserDocumentFromAuth} from '../utils/firebase'
//Actual value that I want to access 

export const UserContext = createContext({
    setCurrentUser:()=>null,
    currentuser:null,
})

export const UserProvider=({ children })=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value={currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((currentUser) => {
            console.log(currentUser)
          if (currentUser) {
            createUserDocumentFromAuth(currentUser);
          }
          setCurrentUser(currentUser);
        });
    
        return unsubscribe;
      }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}