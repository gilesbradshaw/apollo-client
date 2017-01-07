import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const MyMutation = gql`mutation callMethod($id: String, $methodId: String) {
  callMethod (
    id: $id
    methodId: $methodId
  ) {
    id
    displayName {
      value {
        text
      }
    }
    description {
      value {
        text
      }
    }
  }
}`;
const MyCaller = ({submit, id, node: {id:methodId, displayName, executable, arguments: args}={}}) => <div>
{executable.value && <div>
    {JSON.stringify(args)}
    <button onClick={()=>submit({ id, methodId })}>{displayName.value.text}</button>
  </div>
}
</div>


const Method = graphql(MyMutation, {
  props: ({mutate, id, methodId })=>({
    submit: ({ id, methodId }) => mutate({variables: {id, methodId}})
  })
})(MyCaller);

export default Method;

