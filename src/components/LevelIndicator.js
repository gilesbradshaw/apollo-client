import React from 'react';
import Name from './Node/Name'
import Output from './values/Output'
import treeStyles from '../styles/TreeStyles'

const LevelIndicator = ({id})=>
  <div>
    <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
      <div style={treeStyles.titleLabel}>LevelIndicator</div>
      <Name id={id}/>
    </div>
    <div style={treeStyles.flex}>
      <div style={treeStyles.step}/>
      <div>
        <Output id={id}/>
      </div>
    </div>
  </div>

export default LevelIndicator;
