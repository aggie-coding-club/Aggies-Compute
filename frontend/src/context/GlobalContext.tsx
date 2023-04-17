// import React from "react";

// interface OAuthContext {
//     usedOAuth: boolean;
//     setUsedOAuth?: () => {};
// }

// const defaultState = {
//   // all global states and their setter functions go here
//   usedOAuth: false,
// };

// export const GlobalContext = React.createContext<OAuthContext>(defaultState);

import React from "react";

const GlobalContext = React.createContext({
  // all global states and their setter functions go here
  usedOAuth: false,
  setUsedOAuth: (used: boolean) => {},
});

export default GlobalContext;