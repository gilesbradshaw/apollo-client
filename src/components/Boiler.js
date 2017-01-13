import React from 'react';
import gql from 'graphql-tag';
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


const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
  } 
}`;



const _Boiler = ({id})=>
  <div>
    <h1><Name id={id}/></h1>
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
          }
        ]
      }}
      component={Methods}
    />
    <CurrentState id={id}/>
    <LastTransition id={id}/>

    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=47",
            targetName: {
              namespaceIndex:4, 
              name:'PipeX001'
            }
          }
        ]
      }}
      component={InputPipe}
    /> 
    
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=47",
            targetName: {
              namespaceIndex:4, 
              name:'DrumX001'
            }
          }
        ]
      }}
      component={Drum}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=47",
            targetName: {
              namespaceIndex:4, 
              name:'PipeX002'
            }
          }
        ]
      }}
      component={OutputPipe}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=47",
            targetName: {
              namespaceIndex:4, 
              name:'FCX001'
            }
          }
        ]
      }}
      component={FlowController}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=47",
            targetName: {
              namespaceIndex:4, 
              name:'LCX001'
            }
          }
        ]
      }}
      component={LevelController}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: "ns=0;i=47",
            targetName: {
              namespaceIndex:4, 
              name:'CCX001'
            }
          }
        ]
      }}
      component={CustomController}
    />
    
  </div>

const Boiler = compose(
  graphql(MyNodeQuery)
)(_Boiler)

export default Boiler;
