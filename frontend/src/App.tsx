import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

// import Test from './components/Test';
import Navbar from "./Navbar";
import Landing from './pages/Landing';
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
