import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Link } from 'react-router'
import './index.css';
import ApolloClient, { createBatchingNetworkInterface} from 'apollo-client';
import { Client } from 'subscriptions-transport-ws';
import { ApolloProvider } from 'react-apollo';
import addGraphQLSubscriptions from './helpers/addGraphQLSubscriptions'
import Node from './components/Node'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Boiler from './components/Boiler'


const batchingNetworkInterface = createBatchingNetworkInterface({
  //uri: 'https://uaql-2.herokuapp.com/graphql',
  uri: 'https://ua-ql-3.herokuapp.com/graphql',
  batchInterval: 10,
  opts: {
    // Options to pass along to `fetch`
  }
});

const wsClient = new Client('ws://uaql-2.herokuapp.com/', {timeout: 20000, reconnect: true});


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





const S = ({data, params: {id}})=>
  <div>     
    <Node id={id}/>
  </div>

const SubscribedComponent = S

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
        <div>
          <Match
              pattern="/:id"
              render= {({id, params}) => <div>
                <Link to={`${params.id}/edit`}>edit</Link>
                <SubscribedComponent id={id} params={params}/>
                <Boiler id='ns=5;i=1'/>
              </div>}
          />
        </div>
      </ApolloProvider>
    </div>
   </BrowserRouter> ,
  document.getElementById('root')
);
