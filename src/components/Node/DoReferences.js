import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import Name from './Name'
import treeStyles from '../../styles/TreeStyles'

const MyNodeQuery = gql`query q(
  $id: String!, 
  $referenceTypeId: String
  $browseDirection: BrowseDirectionEnum
  $nodeClasses: [NodeClassEnum]
  $results: [ResultMaskEnum]
  $includeSubtypes: Boolean 
) { 
  uaNode(id: $id) {
    id
    references(
      referenceTypeId: $referenceTypeId
      browseDirection: $browseDirection
      nodeClasses: $nodeClasses
      results: $results
      includeSubtypes: $includeSubtypes
    ) {
      references {
        id
        browseName {
          name
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
const _DoReferences = ({component:C, loading, browseDirection, data: { uaNode }={}})=>
  <div>
    {uaNode 
      && uaNode.references
      && uaNode.references.references
      && uaNode.references.references.map(r=> <C key={r.id} id={r.nodeId.uaNode.id}/>) 
    }
  </div>

const DoReferences = compose(
  graphql(MyNodeQuery)
)(_DoReferences)

export default DoReferences;
