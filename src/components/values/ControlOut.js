import React from 'react';
import Name from '../Node/Name'
import DataValue from '../Node/DataValue'
import BrowsePath from '../Node/BrowsePath'
import treeStyles from '../../styles/TreeStyles'

const ControlOut = ({id})=>
  <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
    <div style={treeStyles.titleLabel}>Control out</div>    
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
      />
  </div>

export default ControlOut;
