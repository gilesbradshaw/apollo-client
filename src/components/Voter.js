import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const MyVoter = ({submit, id}) => <span onClick={()=>submit(id)}>vote</span>
const MyMutation = gql`mutation upvotePost($id: Int!) {
  upvotePost (
    postId: $id
  ) {
    id,
    votes
  }
}`;
const Voter = graphql(MyMutation, {
  props: ({mutate})=>({
    submit: (id) => mutate({variables: {id}})
  })
})(MyVoter);

export default Voter;
