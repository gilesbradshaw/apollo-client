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


const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
  } 
}`;



const _BoilerSummary = ({id})=>
  <div>
    <Link
      activeOnlyWhenExact 
      activeStyle={treeStyles.active}
      to={`/boilers/${id}`}>
      <div style={{...treeStyles.flex, background:'inherit'}}>
        <Name id={id}/>
        <BrowsePath
          id={id}
          relativePath={{
            elements:
            [
              {
                referenceTypeId: "ns=0;i=47",
                targetName: {
                  namespaceIndex:4, 
                  name:'Simulation'
                }
              },
              {
                referenceTypeId: "ns=0;i=47",
                targetName: {
                  namespaceIndex:0, 
                  name:'CurrentState'
                }
              }

            ]
          }}
          component={DataValue}
        />
      </div>
    </Link>
  </div>

const BoilerSummary = compose(
  graphql(MyNodeQuery)
)(_BoilerSummary)

export default BoilerSummary;
