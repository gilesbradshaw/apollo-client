import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'
import SingleInput from './values/SingleInput' 
import treeStyles from '../styles/TreeStyles'

const Valve= ({id})=>
  <div>
    <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
      <div style={treeStyles.titleLabel}>
        Valve
      </div>
      <Name id={id}/>
    </div>
    <div style={treeStyles.flex}>
      <div style={treeStyles.step}/>
      <div>
        <SingleInput id={id}/>
      </div>
    </div>
  </div>

export default Valve;
