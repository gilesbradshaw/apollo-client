import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import Name from './Name'

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    dataValue {
      statusCode {
        value
        description
        name
      }
    }
  } 
}`;



const _DataQuality = ({ data: {loading, uaNode }={}})=>
  <span>
    {!loading && 'hereeee'}
    {uaNode && uaNode.dataValue.statusCode.name}
  </span>

const DataQuality = compose(
  graphql(MyNodeQuery)
)(_DataQuality)

export default DataQuality;
