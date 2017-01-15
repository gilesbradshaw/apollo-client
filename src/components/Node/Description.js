import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    description {
      value {
        text
      }
    }
  } 
}`;



const _Description = ({ data: {loading, uaNode }={}})=>
  <span>
    {uaNode 
      && uaNode.description 
      && uaNode.description.value 
      && uaNode.description.value.text }
  </span>

const Description = compose(
  graphql(MyNodeQuery)
)(_Description)

export default Description;
