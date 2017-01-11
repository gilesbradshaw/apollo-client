import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Field, reduxForm } from 'redux-form';

import mutation from './DataValue/gql/mutation'
import query from './DataValue/gql/query'

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
  //form: 'update' // a unique name for this form
});

const MyUpdater = formise(_MyUpdater)

const HereWeGo = ({
  mutate, 
  id,  
  data,
  loading
})=> <div>
  {!loading
     && data.uaNode 
     && data.uaNode.dataValue 
     && data.uaNode.dataValue.value
     && <MyUpdater
    form={`update: ${data.uaNode.id}`}
    initialValues={{value: data.uaNode.dataValue.value.intValue}}
    data={data}
    onSubmit={(props)=>{
      console.log('mmm', props.value)
      mutate({
        variables: {
          id: data.uaNode.id, 
          value: {
            ...data.uaNode.dataValue,
            value: props.value,
            statusCode: undefined,
            __typename: undefined
          }
        }
      })
    }}
  />}
 </div>


const Update = 
  compose(
    graphql(mutation, {
      props: ({ mutate})=>({mutate})
    }),
    graphql(query)
  )(HereWeGo);

export default Update;

