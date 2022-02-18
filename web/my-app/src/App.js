import { useState, createContext, useContext } from "react";
import React from 'react'

import Header from "./Header";
import './css/index.min.css';
import Test from "./Test";
// const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Jess");

  return (
    // <UserContext.Provider value={user}>
      <div >
        {/*<PopupSignIn/>*/}
        <Header />
        <Test />
      </div>
    // </UserContext.Provider>
  );
}



export default App;
