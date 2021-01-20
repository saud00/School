import React from 'react';
import './App.css';
import Home from './components/route'
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloProviderHooks } from '@apollo/react-hooks';


const client= new ApolloClient({
    uri:'http://localhost:8000/graphql/'
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
      <Home/>
      </ApolloProviderHooks>
      </ApolloProvider>
    </div>
  );
}

export default App;
