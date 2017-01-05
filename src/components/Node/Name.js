import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    displayName {
      value {
        text
      }
    }
  } 
}`;



const _Name = ({loading, data: { uaNode }={}})=>
  <span style={{ fontWeight:'bold' }}>
    {uaNode 
      && uaNode.displayName
      && uaNode.displayName.value
      && uaNode.displayName.value.text}
  </span>

const Name = compose(
  graphql(MyNodeQuery)
)(_Name)

export default Name;
