import React from 'react';
import BrowsePath from './Node/BrowsePath'
import FlowTransmitter from './FlowTransmitter'
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Output pipe')
const OutputPipe = ({id})=>
  <div>
    <LabeledName id={id}/>
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
