import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import Name from './Name'

const MyNodeQuery = gql`query q(
  $id: String!, 
  $browseDirection: BrowseDirectionEnum,
  $nodeClasses: [NodeClassEnum]
  $results: [ResultMaskEnum]
  $includeSubtypes: Boolean 
) { 
  uaNode(id: $id) {
    id
    references(
      browseDirection: $browseDirection
      nodeClasses: $nodeClasses
      results: $results
      includeSubtypes: $includeSubtypes
    ) {
      references {
        id
        referenceTypeId { 
          uaNode { 
            id
          }
        }
        nodeClass
        typeDefinition { 
          uaNode { 
            id
          }
        }
        nodeId {
          uaNode {
            id
          }
        }
        displayName {
          text
        }
      }
    }
  } 
}`;
const _References = ({loading, data: { uaNode }={}})=>
  <ul style={{ fontWeight:'bold' }}>
    {uaNode 
      && uaNode.references
      && uaNode.references.references
      && uaNode.references.references.map(r=>
        <li key={r.id}>
          <Link to={r.nodeId.uaNode.id}>
            {r.nodeClass}
            -
            {r.displayName.text} 
             -
            <Name id= {r.referenceTypeId.uaNode.id}/>
             -
            <Name id= {r.typeDefinition.uaNode.id}/>
            
          </Link>
          
          
        </li>
      ) }
  </ul>

const References = compose(
  graphql(MyNodeQuery)
)(_References)

export default References;
