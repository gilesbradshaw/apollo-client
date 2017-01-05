import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import Name from './Name'

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    valueRank { 
      value 
    }
  } 
}`;



const _ValueRank = ({loading, data: { uaNode }={}})=>
  <span>
    {uaNode && 
      uaNode.valueRank.value
    }
  </span>

const ValueRank = compose(
  graphql(MyNodeQuery)
)(_ValueRank)

export default ValueRank;
