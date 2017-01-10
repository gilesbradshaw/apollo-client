import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'

const FlowController = ({id})=>
  <span>
    <Name id={id}/>
    Flow!!!:: {id}
    {/*}
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'Measurement'
            }
          }
        ]
      }}
      component={DataValue}
    /> */}
        
    setpoint
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'SetPoint'
            }
          }
        ]
      }}
      component={DataValue}
    />
    out
    {/*
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'ControlOut'
            }
          }
        ]
      }}
      component={DataValue}
    /> */}
  </span>

export default FlowController;
