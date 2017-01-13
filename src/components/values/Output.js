import React from 'react';
import Name from '../Node/Name'
import DataValue from '../Node/DataValue'
import BrowsePath from '../Node/BrowsePath'
import treeStyles from '../../styles/TreeStyles'

const Output = ({id})=>
  <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
    <div style={treeStyles.titleLabel}>Output</div>    
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

export default Output;
