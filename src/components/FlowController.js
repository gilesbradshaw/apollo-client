import React from 'react';
import Name from './Node/Name'
import Measurement from './values/Measurement'
import Setpoint from './values/Setpoint'
import ControlOut from './values/ControlOut'
import treeStyles from '../styles/TreeStyles'

const FlowController = ({id})=>
  <div>
    <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
      <div style={treeStyles.titleLabel}> Flow Controller </div>
      <Name id={id}/>
    </div>
    <div style={treeStyles.flex}>
      <div style={treeStyles.step}/>
      <div>
        <Measurement id={id}/>
        <Setpoint id={id}/>
        <ControlOut id={id}/>
      </div>
    </div>
  </div>
export default FlowController;
