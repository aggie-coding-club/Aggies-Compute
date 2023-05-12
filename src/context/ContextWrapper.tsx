import React, { useState, useEffect } from "react";
// import GlobalContext from "/Users/alana/Desktop/ACC/Aggies-Computes/frontend/src/context/GlobalContext"
import GlobalContext from "../context/GlobalContext"

export default function ContextWrapper(props: any) {
    // all global states are declared here
  
    // signals whether user signed in with google
    const [usedOAuth, setUsedOAuth] = useState(false);

    // const toggleOAuth = () => {
    //     setUsedOAuth(usedOAuth);
    // };
  
    return (
      <GlobalContext.Provider
        value={{
          /* add states and their setter functions here, too*/
          usedOAuth,
          setUsedOAuth,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  }