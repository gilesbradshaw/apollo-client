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
  <div  style={{display:'flex'}}>
    {uaNode 
      && uaNode.references
      && uaNode.references.references
      && uaNode.references.references.map(r=>

        <div key={r.id}>
          <CallMethod id={r.nodeId.uaNode.id}/>
          <Method id={id} node={r.nodeId.uaNode} />
        </div>
      ) }
  </div>

const Methods = compose(
  graphql(MyNodeQuery)
)(_Methods)

export default Methods;
