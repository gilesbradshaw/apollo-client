import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Field, reduxForm } from 'redux-form';

const MyMutation = gql`mutation callMethod(
  $id: String
  $methodId: String
  $inputArguments: [InputArgument]
  ) {
  callMethod (
    id: $id
    methodId: $methodId
    inputArguments: $inputArguments
  ) {
    id
    commandCount
    outputArgument {
      index
    }
    outArguments {
      index
    }
  }
}`;

const formise = reduxForm({
  form: 'contact' // a unique name for this form
});

const _MyCaller = ({handleSubmit, submit, id, node: {id:methodId, displayName, executable, arguments: args}={}}) => <div>
  {executable.value && <form onSubmit={handleSubmit}>
    {JSON.stringify(args)}
    <ul>
    {args && args.inputArguments.map((ia,i)=>
      <li key={i}>
          {ia.name}
          <label htmlFor={i}>{ia.description.text}</label>
          <Field name={i.toString()} component="input" type="text"/>
      </li>
    )}
    </ul>
    <button type='submit' >{displayName.value.text}</button>
  </form>
}
</div>

const MyCaller = formise(_MyCaller)

const HereWeGo = ({submit, id,  node, data})=> <div>
  <MyCaller
 node={node}
  onSubmit={(props)=>{
    console.log('submitting',props,node)
    submit({
      id: id, 
      methodId: node.id,
      inputArguments: node.arguments.inputArguments.map((a,i)=>({
        dataType: a.dataType.displayName.value.text,
        value: props[i]
      }))
    })
  }}
 />
 </div>



const Method = 
  compose(
    graphql(MyMutation, {
      props: ({mutate, id, methodId })=>({
        submit: (variables) => mutate({variables})
      })
    })
  )(HereWeGo);

export default Method;

