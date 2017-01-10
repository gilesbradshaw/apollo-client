import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'




const FlowTransmitter= ({id})=>
  <div>
    <div>
      Flow Transmitter
    </div>
    <Name id={id}/>

    <div>
      Output
    </div>
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=47',
            targetName: {
              namespaceIndex:4, 
              name:'Output'
            }
          }
        ]
      }}
      component={Name}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=47',
            targetName: {
              namespaceIndex:4, 
              name:'Output'
            }
          }
        ]
      }}
      component={DataValue}
    />
  </div>

export default FlowTransmitter;
