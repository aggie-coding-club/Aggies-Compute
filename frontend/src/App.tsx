import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from '@apollo/client';

import Test from './components/Test';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Test />
      </div>
    </ApolloProvider>
  );
}

export default App;
