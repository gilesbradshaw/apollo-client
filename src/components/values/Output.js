import React from 'react';
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'

const _Output = labeledValue('Output')

const Output = ({id})=>
  <BrowsePath
    id={id}
    relativePath={{
      elements:
      [
        {
          referenceTypeId: 'ns=0;i=47',
          targetName: {
            namespaceIndex:4, 
            name:'Output'
          }
        }
      ]
    }}
    component={_Output}
  />

export default Output;
