import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import Name from './Name'
import treeStyles from '../../styles/TreeStyles'

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
        browseName {
          name
        }
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
const _References = ({loading, browseDirection, data: { uaNode }={}})=>
  <div>
    {uaNode 
      && uaNode.references
      && uaNode.references.references
      && uaNode.references.references.map(r=>
        <div key={r.id} style={{...treeStyles.flex}}>
          {browseDirection=='Inverse' && 
            <Link 
              style={treeStyles.titleLabel}
              title='reference' 
              to={`/browse/${r.nodeId.uaNode.id}`}>
            {r.browseName.name}
            </Link>
          }
          <Link
            style={treeStyles.label} 
            title='reference type' 
            to={`/browse/${r.referenceTypeId.uaNode.id}`}>
            <Name id={r.referenceTypeId.uaNode.id}/>
          </Link>
          <Link
            style={treeStyles.label} 
            title='type definition' 
            to={`/browse/${r.typeDefinition.uaNode.id}`}>
            <Name id={r.typeDefinition.uaNode.id}/>
          </Link>
          {browseDirection!='Inverse' && 
            <Link
              style={treeStyles.titleLabel}
              title='reference' 
              to={`/browse/${r.nodeId.uaNode.id}`}>
              {r.browseName.name}
            </Link>
          }
        </div>
      ) }
  </div>

const References = compose(
  graphql(MyNodeQuery)
)(_References)

export default References;
