import React from 'react';
import BrowsePath from './Node/BrowsePath'
import SingleInput from './values/SingleInput' 
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Valve')
const Valve= ({id})=>
  <div>
    <LabeledName id={id}/>
    <div style={treeStyles.flex}>
      <div style={treeStyles.step}/>
      <div>
        <SingleInput id={id}/>
      </div>
    </div>
  </div>

export default Valve;
