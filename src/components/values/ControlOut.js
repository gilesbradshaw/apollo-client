import React from 'react';
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'


const _ControlOut = labeledValue('Control out');
const ControlOut = ({id})=>
  <BrowsePath
    id={id}
    relativePath={{
      elements:
      [
        {
          referenceTypeId: 'ns=0;i=46',
          targetName: {
            namespaceIndex:4, 
            name:'ControlOut'
          }
        }
      ]
    }}
    component={_ControlOut}
  />

export default ControlOut;
