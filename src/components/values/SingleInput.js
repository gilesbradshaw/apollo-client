import React from 'react';
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'

const _SingleInput = labeledValue('Input')
const SingleInput = ({id})=>
  <BrowsePath
    id={id}
    relativePath={{
      elements:
      [
        {
          referenceTypeId: 'ns=0;i=47',
          targetName: {
            namespaceIndex:4, 
            name:`Input`
          }
        }
      ]
    }}
    component={_SingleInput}
  />

export default SingleInput;
