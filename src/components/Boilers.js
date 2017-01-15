import React from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router'
import { graphql, compose } from 'react-apollo';
import FlowController from './FlowController'
import LevelController from './LevelController'
import CustomController from './CustomController'
import InputPipe from './InputPipe'
import OutputPipe from './OutputPipe'
import Drum from './Drum'
import BrowsePath from './Node/BrowsePath'
import Methods from './Node/Methods'
import DataValue from './Node/DataValue'
import Name from './Node/Name'
import CurrentState from './values/CurrentState'
import LastTransition from './values/LastTransition'
import treeStyles from '../styles/TreeStyles'
import DoReferences from './Node/DoReferences'
import BoilerSummary from './BoilerSummary'


const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
  } 
}`;

const Yip2 = ({id})=><div style={treeStyles.flex}>
  <div style = {treeStyles.step}/>
  <div>
    <h1>Boilers</h1>
    <DoReferences 
      referenceTypeId='ns=0;i=47'
      browseDirection='Forward' 
      id={id} 
      component={BoilerSummary}/>
    <DoReferences 
      referenceTypeId='ns=0;i=35'
      browseDirection='Forward' 
      id={id} 
      component={BoilerSummary}/>
  </div>
</div>

const _Boilers = ({id})=>
  <div>
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=35",
            targetName: {
              namespaceIndex:4, 
              name:'Boilers'
            }
          }
        ]
      }}
      component={Yip2}
    />
    
  </div>

const Boilers = compose(
  graphql(MyNodeQuery)
)(_Boilers)

export default Boilers;
