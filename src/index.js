import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Link } from 'react-router'
import './index.css';
import ApolloClient, { createBatchingNetworkInterface} from 'apollo-client';
import { Client } from 'subscriptions-transport-ws';
import { ApolloProvider } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import addGraphQLSubscriptions from './helpers/addGraphQLSubscriptions'
import Node from './components/Node'
import Post from './components/Post'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


const batchingNetworkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:8089/graphql',
  batchInterval: 10,
  opts: {
    // Options to pass along to `fetch`
  }
});

const wsClient = new Client('ws://localhost:8090');


const networkInterface = addGraphQLSubscriptions(
  batchingNetworkInterface,
  // createNetworkInterface({ uri: 'http://localhost:8089/graphql' }),
  wsClient,
);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o=> o.id
});


const reducers = {
  apollo: client.reducer(),
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)



const MyComponent = (props) => <div>
  {props.data.posts && 
    <ul>
      {
        props.data.posts.map(p=>
          <li key={p.id}>
            <Post id={p.id}/>
          </li>
        )
      }
    </ul>
  }
</div>;


const MyQuery = gql`query Query { 
  posts { 
    id
  } 
}`;

const S = ({data, params: {id}})=>
  <div>     
    <MyComponent data={data}/>
    <Node id={id}/>
  </div>

const SubscribedComponent = graphql(MyQuery)(S)

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Link to="/ns=2;i=10931">Home1</Link>
      <Link to="/ns=2;i=10932">Home2</Link>
      <Link to="/ns=2;i=10849">Home3</Link>
      <Link to="/ns=2;i=10855">Home4</Link>
      <Link to="/ns=2;i=10939">Home5</Link>
      <Link to="/ns=2;i=10219">Homesatic</Link>
      
      <ApolloProvider 
        client={client} 
        store={store}
      >
        <Match
          exactly pattern="/:id"
            component={SubscribedComponent} 
        />
      </ApolloProvider>
    </div>
   </BrowserRouter> ,
  document.getElementById('root')
);
