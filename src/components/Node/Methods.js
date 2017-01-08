import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router'
import CallMethod from './CallMethod';
import Method from './Method';

const MyNodeQuery = gql`query q(
  $id: String!, 
) { 
  uaNode(id: $id) {
    id
    references(
      browseDirection: Forward
      nodeClasses: [Method]
    ) {
      references {
        id
        nodeId {
          uaNode {
            id
            commandCount
            executable {
              value 
            }
            displayName {
              value {
                text
              }
            }
            outArguments {
              index
            }
            arguments {
              inputArguments {
                dataType {
                  id
                  displayName {
                    value {
                      text
                    }
                  }
                }
                name
                valueRank
                arrayDimensions
                description {
                  text
                  locale
                }
              }
              outputArguments {
                dataType {
                  id
                  displayName {
                    value {
                      text
                    }
                  }
                }
                name
                valueRank
                arrayDimensions
                description {
                  text
                  locale
                }
              }
            }
          }
        }
        displayName {
          text
        }
      }
    }
  } 
}`;
const _Methods = ({id, data: { uaNode }={}})=>
  <ul style={{ fontWeight:'bold' }}>
    {uaNode 
      && uaNode.references
      && uaNode.references.references
      && uaNode.references.references.map(r=>
        <li key={r.id}>
          <h1>{r.nodeId.uaNode.commandCount}</h1>
          <Link to={r.nodeId.uaNode.id}>
            -{JSON.stringify(r.nodeId.uaNode.outArguments)}-
            {r.displayName.text} 
            {r.nodeId.uaNode.id}
            {r.nodeId.uaNode.executable.value && 'execute'}
            <CallMethod id={r.nodeId.uaNode.id}/>
          </Link>
          <Method id={id} node= {r.nodeId.uaNode} />
        </li>
      ) }
  </ul>

const Methods = compose(
  graphql(MyNodeQuery)
)(_Methods)

export default Methods;
