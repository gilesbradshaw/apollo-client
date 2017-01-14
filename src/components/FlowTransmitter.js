import React from 'react';
import Name from './Node/Name'
import Output from './values/Output'
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Flow transmitter')

const FlowTransmitter= ({id})=>
  <div>
    <LabeledName id={id}/>
    
    <div style={treeStyles.flex}>
        <div style={treeStyles.step}/>
        <div>
          <Output id={id}/>
        </div>
    </div>
  </div>
export default FlowTransmitter;
