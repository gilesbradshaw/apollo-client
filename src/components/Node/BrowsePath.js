import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
// import Update from './Update';


const MyNodeQuery = gql`
  query b($id: String!, $relativePath: RelativePath) { 
    uaNode(id: $id) { 
      id
      browsePath( relativePath: $relativePath) {
      	id
    	}
    } 
  }`;


const _Executable = ({ 
  component: C, 
  data: { 
    uaNode: {
      browsePath
    }={} 
  }={}
}) =>
  <div>
    {C && browsePath && 
      browsePath.map(b=><C id={b.id} key={b.id}/>) 
    }
  </div>


const Executable = compose(
  graphql(MyNodeQuery)
)(_Executable)

export default Executable;
