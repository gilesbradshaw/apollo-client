import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import treeStyles from '../../styles/TreeStyles'

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
  <div style={treeStyles.name}>
    {uaNode 
      && uaNode.displayName
      && uaNode.displayName.value
      && uaNode.displayName.value.text}
  </div>

const Name = compose(
  graphql(MyNodeQuery)
)(_Name)

export default Name;
