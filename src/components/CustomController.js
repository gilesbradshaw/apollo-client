import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'
import ControlOut from './values/ControlOut'
import Input from './values/Input'
import treeStyles from '../styles/TreeStyles'

const CustomController = ({id})=>
  <div>
    <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
      <div style={treeStyles.titleLabel}>
        Custom controller
      </div>
      <Name id={id}/>
    </div>
    <div style={treeStyles.flex}>
      <div style={treeStyles.step}/>
      <div>
        <Input id={id} i={1}/>
        <Input id={id} i={2}/>
        <Input id={id} i={3}/>
        <ControlOut id={id}/>
      </div>
    </div>
  </div>

export default CustomController;
