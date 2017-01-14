import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import FlowTransmitter from './FlowTransmitter'
import Valve from './Valve'
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Input pipe')

const InputPipe = ({id})=>
  <div>
    <LabeledName id={id}/>
    <div>
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
      </div>
    </div>
  </div>



export default InputPipe;
