import React from 'react';
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'

const _Input = labeledValue('Input')

const Input = ({id, i=''})=>
  <BrowsePath
    id={id}
    relativePath={{
      elements:
      [
        {
          referenceTypeId: 'ns=0;i=46',
          targetName: {
            namespaceIndex:4, 
            name:`Input${i}`
          }
        }
      ]
    }}
    component={_Input}
  />
  
export default Input;
