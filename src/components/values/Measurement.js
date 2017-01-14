import React from 'react';
import BrowsePath from '../Node/BrowsePath'
import labeledValue from './labeledValue'

const _Measurement = labeledValue('Measurement')

const Measurement = ({id})=>
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'Measurement'
            }
          }
        ]
      }}
      component={_Measurement}
    />

export default Measurement;
