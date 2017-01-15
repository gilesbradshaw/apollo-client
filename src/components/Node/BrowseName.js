import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    browseName {
      value {
        name
      }
    }
  } 
}`;



const _BrowseName = ({ data: {loading, uaNode }={}})=>
  <span>
    {uaNode 
      && uaNode.browseName 
      && uaNode.browseName.value 
      && uaNode.browseName.value.name }
  </span>

const BrowseName = compose(
  graphql(MyNodeQuery)
)(_BrowseName)

export default BrowseName;
