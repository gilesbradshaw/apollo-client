import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter, 
  BrowserRouter, 
  Match, 
  Link,
  Redirect
} from 'react-router'
import './index.css';
import ApolloClient, { createBatchingNetworkInterface} from 'apollo-client';
import { Client } from 'subscriptions-transport-ws';
import { ApolloProvider } from 'react-apollo';
import addGraphQLSubscriptions from './helpers/addGraphQLSubscriptions'
import Node from './components/Node'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Boiler from './components/Boiler'
import BoilerSummary from './components/BoilerSummary'
import treeStyles from './styles/TreeStyles'


const batchingNetworkInterface = createBatchingNetworkInterface({
  //uri: 'http://localhost:8089/graphql',
  uri: 'https://ua-ql-3.herokuapp.com/graphql',
  batchInterval: 10,
  opts: {
    // Options to pass along to `fetch`
  }
});

const wsClient = new Client('wss://uaql-2.herokuapp.com/', {timeout: 20000, reconnect: true});
//const wsClient = new Client('ws://localhost:8090/', {timeout: 20000,});


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


const BoilerPage=({params: {id}})=><div>
  <Boiler id={id}/>
</div>


const Boilers=({pathname})=><div>
    <div style={treeStyles.flex}>
      <BoilerSummary id='ns=4;i=1241'/>
      <BoilerSummary id='ns=5;i=1'/>
    </div>    
  <Match pattern=":id" component={BoilerPage} />
</div>

const Home=()=><div>
  <h1>Opc-ua accessed from the browser with GrahQL</h1>
</div>

const HomeMenu=()=><div>
  <Link 
    to="/" 
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>Home</Link>
  <Link 
    to="/boilers"
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>Boilers</Link>
  <Link 
    to="/browse"
    activeStyle={treeStyles.active}>Browse</Link>
  <Match pattern="/boilers" component={Boilers} />
  <Match pattern="/browse" component={Browse} />

</div>

const Browse=({pathname})=><div style={treeStyles.flex}>
    <Match exactly pattern={pathname} render={()=><Redirect to={`${pathname}/ns=0;i=84`}/>}/>
    
    {/*
    <div>
      <Link to={`$pathname}/ns=2;i=10931`}>Home1</Link>
    </div>

    <Link to="/browse/ns=2;i=10932">Home2</Link>
    <Link to="/browse/ns=2;i=10849">Home3</Link>
    <Link to="/browse/ns=2;i=10855">Home4</Link>
    <Link to="/browse/ns=2;i=10939">Home5</Link>
    <Link to="/browse/ns=2;i=10219">Homesatic</Link>
    */}
    <Match
      pattern="/browse/:id"
      render= {({params}) => <div>
        <Link to={`${params.id}/edit`}>edit</Link>
        <SubscribedComponent params={params}/>
      </div>}
    />
</div>

ReactDOM.render(
  <HashRouter>
    <div>
      
      <ApolloProvider 
        client={client} 
        store={store}
      >
        <div>
          {/* <Boiler id='ns=4;i=1241'/> */}
          <Match pattern="/" component={HomeMenu} />
          <Match exactly pattern="/" component={Home} />                   
        </div>
      </ApolloProvider>
    </div>
   </HashRouter> ,
  document.getElementById('root')
);
