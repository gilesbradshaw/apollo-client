import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    browseName {
      value {
        namespaceIndex
      }
    }
  } 
}`;



const _BrowseNamespaceIndex = ({ data: {loading, uaNode }={}})=>
  <span>
    {uaNode 
      && uaNode.browseName 
      && uaNode.browseName.value 
      && uaNode.browseName.value.namespaceIndex }
  </span>

const BrowseNamespaceIndex = compose(
  graphql(MyNodeQuery)
)(_BrowseNamespaceIndex)

export default BrowseNamespaceIndex;
