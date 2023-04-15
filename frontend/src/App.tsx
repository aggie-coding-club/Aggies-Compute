import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

// Components Imports
import Landing from './pages/Landing';

// Algebra Imports
import AlgebraLanding from './pages/Algebra/AlgebraLanding';
import AddSubMult from './pages/Algebra/AddSubMult';
import Pemdas from './pages/Algebra/Pemdas'

// Calculus Imports
import CalculusLanding from './pages/Calculus/CalculusLanding';
import SimpleDerivative from './pages/Calculus/SimpleDerivative';

// Crypto Imports
import CryptoLanding from './pages/Crypto/CryptoLanding';
import AffineCipher from './pages/Crypto/affineCipher';
import ShiftCipher from './pages/Crypto/shiftCipher';
import BabyStepGiantStep from './pages/Crypto/babyStepGiantStep';
import ChineseRemainderTheorem from './pages/Crypto/chineseRemainderTheorem';
import DiffieHellman from './pages/Crypto/diffieHellman';
import RSA from './pages/Crypto/RSA';

// LinAlg Imports
import LinAlgLanding from './pages/LinAlg/LinAlgLanding';
import RREF_REF from './pages/LinAlg/RREF_REF';
import InverseMatrix from './pages/LinAlg/InverseMatrix';
import MatrixOperation from './pages/LinAlg/MatrixOperations';

// Features Imports
import ACBot from './pages/Features/ACBot';
import Calculator from './pages/Features/Calculator';
import PhotoMathClone from './pages/Features/PhotoMathClone';
import Profile from './pages/Profile';
import Education from './pages/Features/Education';

// Personal
import LoginPage from "./pages/Login"
import Registration from "./pages/Registration"

// Test Pages
import ConnectionTest from './pages/ConnectionTest';

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
        {/* <Route path="/algorithms" element={<AlgorithmsLanding />} /> */}

        {/* Algebra Routes */}
        <Route path="/algebra" element={<AlgebraLanding />} />
        <Route path="/algebra/add_sub_mult" element={<AddSubMult />} />
        <Route path="/algebra/pemdas" element={<Pemdas />} />

        {/* Calculus Routes */}
        <Route path="/calculus" element={<CalculusLanding />} />
        <Route path="/calculus/simple_derivative" element={<SimpleDerivative />} />

        {/* Crpyto Routes */}
        <Route path="/crypto" element={<CryptoLanding />} />
        <Route path="/crypto/affinecipher" element={<AffineCipher />} />
        <Route path="/crypto/shiftcipher" element={<ShiftCipher />} />
        <Route path="/crypto/babystepgiantstep" element={<BabyStepGiantStep />} />
        <Route path="/crypto/chineseremaindertheorem" element={<ChineseRemainderTheorem />} />
        <Route path="/crypto/diffiehellman" element={<DiffieHellman />} />
        <Route path="/crypto/RSA" element={<RSA />} />
        
        


        {/* Linear Algebra Routes */}
        <Route path="/linalg" element={<LinAlgLanding />} />
        <Route path="/linalg/rref_ref" element={<RREF_REF />} />
        <Route path="/linalg/inverse_matrix" element={<InverseMatrix />} />
        <Route path="/linalg/matrix_operations" element={<MatrixOperation/>}/>

        {/* Features */}
        <Route path="/acbot" element={<ACBot />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/photomathclone" element={<PhotoMathClone />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />

        {/* Personal */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />

        {/* Test Pages */}
        <Route path="/connectiontest" element={<ConnectionTest />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
