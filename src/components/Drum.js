import React from 'react';
import Name from './Node/Name'
import BrowsePath from './Node/BrowsePath'
import LevelIndicator from './LevelIndicator'
import treeStyles from '../styles/TreeStyles'
import labeledName from './labeledName'

const LabeledName =  labeledName('Drum')

const Drum = ({id})=>
  <div>
    <LabeledName id={id}/>
    <div style={treeStyles.flex}> 
      <div style={treeStyles.step}/>
      <div>
        <BrowsePath
          id={id}
          relativePath={{
            elements:
            [
              {
                referenceTypeId: 'ns=0;i=47',
                targetName: {
                  namespaceIndex:4, 
                  name:'LIX001'
                }
              }
            ]
          }}
          component={LevelIndicator}
        />
      </div>
    </div>  
  </div>



export default Drum;
