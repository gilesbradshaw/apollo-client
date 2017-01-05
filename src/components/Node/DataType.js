import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import Name from './Name'

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    dataType { 
      value { 
        uaNode { 
          id
        }
      }
    }
  } 
}`;



const _DataType = ({loading, data: { uaNode }={}})=>
  <div>
    {uaNode && uaNode.dataType && uaNode.dataType.value &&
      <Link to={uaNode.dataType.value.uaNode.id}>
        <Name id={uaNode.dataType.value.uaNode.id}/>
      </Link>
    }
  </div>

const DataType = compose(
  graphql(MyNodeQuery)
)(_DataType)

export default DataType;
