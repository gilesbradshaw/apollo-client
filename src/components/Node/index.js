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
    <div>
      name: 
      <Name id={id}/>
    </div>
    <div>
      node class: 
      <NodeClass id={id}/>
    </div>
    {uaNode && uaNode.nodeClass === 'Variable' && 
      <div>
        <div>
          dataType: 
          <DataType id={id}/> (<ValueRank id={id}/>)
        </div>   
        <div>
          dataQuality: 
          <DataQuality id={id}/>
        </div>
        <div>
          dataValue: 
          <DataValue id={id}/>
        </div>
        
      </div>
    }
    <References
      id={id}
      browseDirection='Forward'
    />
    <References
      browseDirection='Forward'
      nodeClasses={['Method']}
      id={id}
    />
    <Methods
      id={id}
    />
  </div>

const Node = compose(
  graphql(MyNodeQuery)
)(N)

export default Node;
