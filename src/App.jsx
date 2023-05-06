import { useContext } from "react";
import { Routes, Route } from 'react-router-dom';

import { UserContext } from "./context/userContext";

import Navigation from "./routes/navigation/Navigation";
import Home from './routes/home/Home'
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop'
import './App.scss'

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/getstarted' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;