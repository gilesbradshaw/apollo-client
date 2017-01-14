import React from 'react';
import { Link } from 'react-router'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'
import ControlOut from './values/ControlOut'
import Input from './values/Input'
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Custom Controller')

const CustomController = ({id})=>
  <div>
    <LabeledName id={id}/>
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
