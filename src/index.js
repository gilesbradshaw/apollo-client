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
import Name from './components/Node/Name'
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
const HomeMenu=()=>
  <Link 
    to="/" 
    style={treeStyles.menu}
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>Home</Link>
const BoilersMenu=()=>
  <Link 
    to="/boilers"
    style={treeStyles.menu}
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>Boilers</Link>
const BoilerMenu=({params: {id}})=>
  <Link 
    to={`/boilers/${id}`}
    style={treeStyles.menu}
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>
    <Name id={id}/>
  </Link>
const BrowseMenu=()=>
  <Link 
    to="/browse"
    style={treeStyles.menu}
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>Browse</Link>
const BrowseItemMenu=({params: {id}})=>
  <Link 
    to="/browse"
    style={treeStyles.menu}
    activeOnlyWhenExact 
    activeStyle={treeStyles.active}>
    <Name id={id}/>
  </Link>

const Boilers=({pathname})=><div>
    <div style={treeStyles.flex}>
      <BoilerSummary id='ns=4;i=1241'/>
      <BoilerSummary id='ns=5;i=1'/>
    </div>    
  
</div>

const Home=()=><div>
  <h1>Opc-ua accessed from the browser with GraphQL</h1>
  <BoilersMenu/>
  <BrowseMenu/>
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
          <div style={treeStyles.flex}>
            <Match pattern="/" component={HomeMenu} />
            <Match pattern='/boilers' component={BoilersMenu} />
            <Match pattern='/boilers/:id' component={BoilerMenu} />
            <Match pattern='/browse' component={BrowseMenu} />
            <Match pattern='/browse/:id' component={BrowseItemMenu} />
          </div>
          <Match exactly pattern="/" component={Home} />                   
          <Match exactly pattern="/boilers" component={Boilers} />
          <Match pattern="/boilers/:id" component={BoilerPage} />
          <Match pattern="/browse" component={Browse} />
        </div>
      </ApolloProvider>
    </div>
   </HashRouter> ,
  document.getElementById('root')
);
