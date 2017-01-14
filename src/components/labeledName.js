import React from 'react';
import { Link } from 'react-router'
import Name from './Node/Name'
import treeStyles from '../styles/TreeStyles'

const labeledName = (label)=> ({id})=>
  <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
    <div style={treeStyles.titleLabel}>
      <Link to={`/browse/${id}`}>{label}</Link>
    </div> 
    <Name id={id}/>   
  </div>

export default labeledName;
