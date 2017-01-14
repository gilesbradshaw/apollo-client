import React from 'react'
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'

const _LastTransition = labeledValue('Last transition')
const LastTransition = ({id})=> 
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
            name:'LastTransition'
          }
        }

      ]
    }}
    component={_LastTransition}
  />

export default LastTransition;
