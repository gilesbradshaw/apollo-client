import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'




const Valve= ({id})=>
  <span>
    <Name id={id}/>
    valve!!!! {id}
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=47',
            targetName: {
              namespaceIndex:4, 
              name:'Input'
            }
          }
        ]
      }}
      component={DataValue}
    />
  </span>

export default Valve;
