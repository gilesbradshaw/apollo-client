import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { 
  Match,
  Link,
  Redirect
} from 'react-router'


const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    nodeClass
  } 
}`;



const _EditMenu = ({pathname, loading, data: { uaNode }={}})=>
  <span>
    {uaNode && uaNode.nodeClass=='Variable' && 
      <Match 
        pattern={pathname}
        render={({pathname})=><div>
          <Match
            exactly pattern={`${pathname}`}
            render= {({params}) =>
              <Link to={`${pathname}/edit`}>edit</Link>
            }
          />
          <Match
            exactly pattern={`${pathname}/edit`}
            render= {({params}) =>
              <Link to={`${pathname}`}>x</Link>
            }
          />
        </div>} 
      />
    }
  </span>

const EditMenu = compose(
  graphql(MyNodeQuery)
)(_EditMenu)

export default EditMenu;
