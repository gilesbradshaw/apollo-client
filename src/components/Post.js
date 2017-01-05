import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Voter from './Voter'



const SUBSCRIPTION_QUERY = gql`
  subscription post ($id: Int) {
    postUpvoted(id: $id) {id, votes}
  }
`;

const MyQuery = gql`query post($id: Int) { 
  post(id: $id) { 
    id, 
    votes,
    title,
    author {
      id, 
      firstName, 
      lastName
    } 
  } 
}`;


const MyQuery2 = gql`query post($id: Int) { 
  post2: post(id: $id) { 
    id, 
    title 
  } 
}`;


const SP = (props)=> {
  if(props.data.loading) {
      return <div>{JSON.stringify(props)}</div>
    }
    const { data: { post: {title, votes, author, id} = undefined } = undefined } = props
    return <div>

      {title || 'no title!!'}
      -**pppp
      {votes} 
      -
      {author.lastName} 
      - 
      <Voter id={id}/>
    </div>
}
class _SubscribedPost extends Component {
  componentWillReceiveProps(nextProps) {
    // we don't resubscribe on changed props, because it never happens in our app
    //??? we should subscribe first!!!!!
    if (false && !this.subscription && !nextProps.data.loading) {
      this.subscription = this.props.data.subscribeToMore({
        document: SUBSCRIPTION_QUERY,
        updateQuery: (previousResult)=> previousResult,
        variables: { id: nextProps.id }
      });
    }
  }
  render(){
    if(this.props.data.loading) {
      return <div>{JSON.stringify(this.props)}</div>
    }
    const { data: { post: {title, votes, author, id} = undefined } = undefined } = this.props
    return id ?  <div>

      {title || 'no title!!'}
      -
      {votes} 
      -
      {author.lastName} 
      - 
      <Voter id={id}/>
    </div> : <div>{JSON.stringify(this.props)}</div>
  }
}

const _Post = compose(
  graphql(SUBSCRIPTION_QUERY),
  graphql(MyQuery2, {
    options() {
      return {
        reducer: (previousResult, action, variables)=>{
          return previousResult
        }
      }
    }
  }),
  graphql(MyQuery)
)(SP)

  export default _Post;
