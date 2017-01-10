import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import FlowTransmitter from './FlowTransmitter'
import Valve from './Valve'

const InputPipe = ({id})=>
  <div>
    <div>
      Input pipe
    </div>
    <Name id={id}/>
    
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=47',
            targetName: {
              namespaceIndex:4, 
              name:'FTX001'
            }
          }
        ]
      }}
      component={FlowTransmitter}
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
              name:'ValveX001'
            }
          }
        ]
      }}
      component={Valve}
    />
  </div>



export default InputPipe;
