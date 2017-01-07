import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
// import Update from './Update';


const MyNodeQuery = gql`
  query q($id: String!) { 
    uaNode(id: $id) { 
      id
      executable { 
        value
      }
    } 
  }`;


const NODE_SUBSCRIPTION_QUERY = gql`
  subscription executable ($id: String) {
    executable(id: $id) {
      id, 
      executable { 
        value
      } 
    }
  }
`;

const _Executable = (props) =>
  <div>
    {JSON.stringify(props)} +++

  </div>
const options = {
  shouldResubscribe: (props, nextProps) => {
    return nextProps.id !== props.id
  }
}

const Executable = compose(
  graphql(NODE_SUBSCRIPTION_QUERY, options),
  graphql(MyNodeQuery)
)(_Executable)

export default Executable;
