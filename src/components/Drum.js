import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import LevelIndicator from './LevelIndicator'


const Drum = ({id})=>
  <span>
    <Name id={id}/>
    Drum! {id}
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=47',
            targetName: {
              namespaceIndex:4, 
              name:'LIX001'
            }
          }
        ]
      }}
      component={LevelIndicator}
    />
    
  </span>



export default Drum;
