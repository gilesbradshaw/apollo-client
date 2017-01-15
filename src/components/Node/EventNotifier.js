import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`query q($id: String!) { 
  uaNode(id: $id) {
    id
    eventNotifier {
      value
    }
  } 
}`;



const _EventNotifier = ({ data: {loading, uaNode }={}})=>
  <span>
    {uaNode 
      && uaNode.eventNotifier.value }
  </span>

const EventNotifier = compose(
  graphql(MyNodeQuery)
)(_EventNotifier)

export default EventNotifier;
