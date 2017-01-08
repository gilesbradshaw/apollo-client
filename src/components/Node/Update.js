import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Field, reduxForm } from 'redux-form';

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
      value {
        __typename
        ... on UaInt {intValue: value}
      }
    }
  } 
}`;

const _MyUpdater = ({
  handleSubmit,
  submit
}) => <form onSubmit={handleSubmit}>
  {/*onClick={()=>submit({id, dataType, arrayType})}>*/}
  <label htmlFor='value'>edit</label>
  <Field name='value' component="input" type="text"/>
  <button type='submit' >go</button>
</form>

const formise = reduxForm({
  form: 'method' // a unique name for this form
});

const MyUpdater = formise(_MyUpdater)

const HereWeGo = ({
  mutate, 
  id,  
  data,
  loading
})=> <div>
  {!loading && data.uaNode && data.uaNode.dataValue && <MyUpdater
    initialValues={{value: data.uaNode.dataValue.value.intValue}}
    data={data}
    onSubmit={(props)=>{
      mutate({
        variables: {
          id: data.uaNode.id, 
          value: {
            ...data.uaNode.dataValue,
            value: props.value,
            __typename: undefined
          }
        }
      })
    }}
  />}
 </div>


const Update = 
  compose(
    graphql(MyMutation, {
      props: ({ mutate})=>({mutate})
    }),
    graphql(MyNodeQuery)
  )(HereWeGo);

export default Update;

