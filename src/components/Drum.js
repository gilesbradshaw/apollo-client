import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import LevelIndicator from './LevelIndicator'
import treeStyles from '../styles/TreeStyles'

const Drum = ({id})=>
  <div>
    <div style={{...treeStyles.flex, ...treeStyles.titleRow}}> 
      <div style={treeStyles.titleLabel}> Drum </div>
      <Name id={id}/>
    </div>
    <div style={treeStyles.flex}> 
      <div style={treeStyles.step}/>
      <div>
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
      </div>
    </div>  
  </div>



export default Drum;
