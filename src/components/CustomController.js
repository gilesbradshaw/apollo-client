import React from 'react';
import Name from './Node/Name'
import DataValue from './Node/DataValue'
import BrowsePath from './Node/BrowsePath'

const CustomController = ({id})=>
  <span>
    <Name id={id}/>
    Custom!!!:: {id}
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'Input1'
            }
          }
        ]
      }}
      component={DataValue}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'Input2'
            }
          }
        ]
      }}
      component={DataValue}
    />
    <BrowsePath
      id={id}
      relativePath={{
        elements:
        [
          {
            referenceTypeId: 'ns=0;i=46',
            targetName: {
              namespaceIndex:4, 
              name:'Input3'
            }
          }
        ]
      }}
      component={DataValue}
    />
    
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
      component={DataValue}
    />
  </span>

export default CustomController;
