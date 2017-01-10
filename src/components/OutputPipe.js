import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import FlowTransmitter from './FlowTransmitter'

const OutputPipe = ({id})=>
  <span>
    <Name id={id}/>
    Output pipe! {id}
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=47',
            targetName: {
              namespaceIndex:4, 
              name:'FTX002'
            }
          }
        ]
      }}
      component={FlowTransmitter}
    />
  </span>



export default OutputPipe;
