import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import Methods from './Methods';
import Name from './Name';
import NodeClass from './NodeClass';
import DataType from './DataType';
import ValueRank from './ValueRank';
import DataQuality from './DataQuality';
import DataValue from './DataValue';
import treeStyles from '../../styles/TreeStyles'
//import DV from './DataValue.1';

import References from './References';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) { 
    id
    nodeClass
  } 
}`;
const N = ({ id, data: {loading, uaNode} = {}})=>
  <div>
    <References
      browseDirection='Inverse'
      id={id}
    />
    <hr/>
    <div style={treeStyles.flex}>
      <div style={treeStyles.titleLabel}>
        Name
      </div>
      <Name id={id}/>
    </div>
    <div style={treeStyles.flex}>
      <div style={treeStyles.titleLabel}>
        Node class
      </div>
      <NodeClass id={id}/>
    </div>
    {uaNode && uaNode.nodeClass === 'Variable' && 
      <div>
        <div style={treeStyles.flex}>
          <div style={treeStyles.titleLabel}>
            Data type 
          </div>
          <DataType id={id}/> (<ValueRank id={id}/>)
        </div>   
        <div style={treeStyles.flex}>
          <div style={treeStyles.titleLabel}>
            Data quality 
          </div>
          <DataQuality id={id}/>
        </div>
        <div style={treeStyles.flex}>
          <div style={treeStyles.titleLabel}>
            Data value 
          </div>
          <DataValue id={id}/>
        </div>
        
      </div>
    }
    <hr/>
    <References
      id={id}
      browseDirection='Forward'
    />
  </div>

const Node = compose(
  graphql(MyNodeQuery)
)(N)

export default Node;
