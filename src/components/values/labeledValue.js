import React from 'react';
import { Link } from 'react-router'
import DataValue from '../Node/DataValue'
import treeStyles from '../../styles/TreeStyles'

const labeledValue = (label)=> ({id})=>
  <div style={{...treeStyles.flex, ...treeStyles.titleRow}}>
    <div style={treeStyles.titleLabel}>
      <Link to={`/browse/${id}`}>{label}</Link>
    </div> 
    <DataValue id={id}/>   
  </div>

export default labeledValue;
