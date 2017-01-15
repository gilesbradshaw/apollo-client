import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { 
  Match,
  Link,
} from 'react-router'
import Methods from './Methods';
import Name from './Name';
import NodeClass from './NodeClass';
import DataType from './DataType';
import ValueRank from './ValueRank';
import DataQuality from './DataQuality';
import DataValue from './DataValue';
import Description from './Description';
import EventNotifier from './EventNotifier';
import BrowseName from './BrowseName';
import BrowseNamespaceIndex from './BrowseNamespaceIndex';
import EditMenu from './EditMenu';
import treeStyles from '../../styles/TreeStyles'
//import DV from './DataValue.1';


import References from './References';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) { 
    id
    nodeClass
  } 
}`;
const N = ({ pathname, id, data: {loading, uaNode} = {}})=>
  <div>
    <h1>Browse</h1>
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
        Description
      </div>
      <Description id={id}/>
    </div>
    <div style={treeStyles.flex}>
      <div style={treeStyles.titleLabel}>
        Browse name
      </div>
      <BrowseName id={id}/>:<BrowseNamespaceIndex id={id}/>
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
            <div style={{...treeStyles.flex, justifyContent: 'space-between'}}>
              Data value 
              <EditMenu pathname={pathname} id={id} />
            </div>
          </div>
          <DataValue id={id}/>
        </div>
        
      </div>
    }
    <div style={treeStyles.flex}>
      <div style={treeStyles.titleLabel}>
        Event notifier
      </div>
      <EventNotifier id={id}/>
    </div>
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
