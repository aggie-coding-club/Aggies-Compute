import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';

// Algebra Imports
import AlgebraLanding from './pages/Algebra/AlgebraLanding';

// Calculus Imports
import CalculusLanding from './pages/Calculus/CalculusLanding';

// Crypto Imports
import CryptoLanding from './pages/Crypto/CryptoLanding';

// LinAlg Imports
import LinAlgLanding from './pages/LinAlg/LinAlgLanding';
import RREF_REF from './pages/LinAlg/RREF_REF';

// Features Imports
import AC_Bot from './pages/Features/AC_Bot';
import Calculator from './pages/Features/Calculator';
import PhotoMathClone from './pages/Features/PhotoMathClone';
import Profile from './pages/Profile';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<Landing />} />

        {/* Algebra Routes */}
        <Route path="/algebra" element={<AlgebraLanding />} />

        {/* Calculus Routes */}
        <Route path="/calculus" element={<CalculusLanding />} />

        {/* Crpyto Routes */}
        <Route path="/crypto" element={<CryptoLanding />} />

        {/* Linear Algebra Routes */}
        <Route path="/linalg" element={<LinAlgLanding />} />
        <Route path="/linalg/rref_ref" element={<RREF_REF />} />

        {/* Features */}
        <Route path="/ac_bot" element={<AC_Bot />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/photomathclone" element={<PhotoMathClone />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
