import React from 'react';
import Measurement from './values/Measurement'
import Setpoint from './values/Setpoint'
import ControlOut from './values/ControlOut'
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Level controller')

const LevelController = ({id})=>
  <div>
    <LabeledName id={id}/>
    <div style={treeStyles.flex}>
      <div style={treeStyles.step}/>
      <div>
        <Measurement id={id}/>
        <Setpoint id={id}/>
        <ControlOut id={id}/>
      </div>
    </div>
  </div>
export default LevelController;
