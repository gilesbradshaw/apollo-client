import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    nodeClass
  } 
}`;



const _NodeClass = ({loading, data: { uaNode }={}})=>
  <span>
    {uaNode && uaNode.nodeClass}
  </span>

const NodeClass = compose(
  graphql(MyNodeQuery)
)(_NodeClass)

export default NodeClass;
