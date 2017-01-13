import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import FlowTransmitter from './FlowTransmitter'
import treeStyles from '../styles/TreeStyles'

const OutputPipe = ({id})=>
  <div>
    <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
      <div style={treeStyles.titleLabel}>Output pipe</div>
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
                  name:'FTX002'
                }
              }
            ]
          }}
          component={FlowTransmitter}
        />
      </div>
    </div>
  </div>



export default OutputPipe;
