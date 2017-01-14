import React from 'react';
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'

const _Setpoint = labeledValue('Setpoint')

const Setpoint = ({id})=>
  <BrowsePath
    id={id}
    relativePath={{
      elements:
      [
        {
          referenceTypeId: 'ns=0;i=46',
          targetName: {
            namespaceIndex:4, 
            name:'SetPoint'
          }
        }
      ]
    }}
    component={_Setpoint}
  />

export default Setpoint;
