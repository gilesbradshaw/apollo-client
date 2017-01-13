import React from 'react';
import Name from '../Node/Name'
import DataValue from '../Node/DataValue'
import BrowsePath from '../Node/BrowsePath'
import treeStyles from '../../styles/TreeStyles'

const Setpoint = ({id})=>
  <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
    <div style={treeStyles.titleLabel}>Setpoint</div>    
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'SetPoint'
            }
          }
        ]
      }}
      component={DataValue}
    />
  </div>

export default Setpoint;
