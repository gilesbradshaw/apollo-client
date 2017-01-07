import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyMutation = gql`mutation updateNode($id: String, $value: ValueInput) {
  updateNode (
    id: $id
    value: $value
  ) {
    id
  }
}`;
const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    dataValue {
      dataType
      arrayType
    }
  } 
}`;

const MyUpdater = ({
  submit, 
  data: { 
    uaNode: { 
      id,
      dataValue: {
        dataType,
        arrayType,
      } = {}
    } = {}
  } = {}
}) => <span
  onClick={()=>submit({id, dataType, arrayType})}>
  update {dataType}:{arrayType}
</span>

const Update = 
  compose(
    graphql(MyMutation, {
      props: ({ mutate })=>{
        return ({
          submit: ({id, dataType, arrayType}) => {
            console.log('muuuuu', id, dataType) 
            mutate({
              variables: {
                id: id, 
                value: { 
                  dataType, 
                  arrayType, 
                  value: [1,2,3888,4,3,2,1,88]
                }
              }
            })
          }
        })
      }
    }),
    graphql(MyNodeQuery)
  )(MyUpdater);

export default Update;

