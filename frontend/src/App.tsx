import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

// Components Imports
import Landing from './pages/Landing';
import AlgorithmsLanding from './pages/AlgorithmsLanding';

// Algebra Imports
import AlgebraLanding from './pages/Algebra/AlgebraLanding';

// Calculus Imports
import CalculusLanding from './pages/Calculus/CalculusLanding';

// Crypto Imports
import CryptoLanding from './pages/Crypto/CryptoLanding';

// LinAlg Imports
import LinAlgLanding from './pages/LinAlg/LinAlgLanding';
import RREF_REF from './pages/LinAlg/RREF_REF';
import InverseMatrix from './pages/LinAlg/InverseMatrix';

// Features Imports
import ACBot from './pages/Features/ACBot';
import Calculator from './pages/Features/Calculator';
import PhotoMathClone from './pages/Features/PhotoMathClone';
import Profile from './pages/Profile';
import Education from './pages/Features/Education';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<Landing />} />
        <Route path="/algorithms" element={<AlgorithmsLanding />} />

        {/* Algebra Routes */}
        <Route path="/algebra" element={<AlgebraLanding />} />

        {/* Calculus Routes */}
        <Route path="/calculus" element={<CalculusLanding />} />

        {/* Crpyto Routes */}
        <Route path="/crypto" element={<CryptoLanding />} />

        {/* Linear Algebra Routes */}
        <Route path="/linalg" element={<LinAlgLanding />} />
        <Route path="/linalg/rref_ref" element={<RREF_REF />} />
        <Route path="/linalg/inverse_matrix" element={<InverseMatrix />} />

        {/* Features */}
        <Route path="/acbot" element={<ACBot />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/photomathclone" element={<PhotoMathClone />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
