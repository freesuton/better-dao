import { useState, createContext, useContext } from "react";
import React from 'react'
import Home from './Home';
import Header from "./Header";
import './css/index.min.css';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Jess");

  return (
    <UserContext.Provider value={user}>
      <div >
        {/*<PopupSignIn/>*/}
        <Header />
      </div>
    </UserContext.Provider>
  );
}



export default App;
