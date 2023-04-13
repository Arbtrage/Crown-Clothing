import { createContext,useState } from 'react'

//Actual value that I want to access 

export const UserContext = createContext({
    setCurrentUser:()=>null,
    currentuser:null,
})

export const UserProvider=({ children })=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value={currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}