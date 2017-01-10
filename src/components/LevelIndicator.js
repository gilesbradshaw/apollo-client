import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'

const LevelIndicator = ({id})=>
  <span>
    <Name id={id}/>
    Level!!!:: {id}
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
    
  </span>

export default LevelIndicator;
