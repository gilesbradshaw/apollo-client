import { print } from 'graphql-tag/printer';

export default (networkInterface, wsClient) => Object.assign(networkInterface, {
  subscribe: (request, handler) => {
    return wsClient.subscribe({
      query: print(request.query),
      variables: request.variables, 
    }, handler)
  },
  unsubscribe: (id) => {
    wsClient.unsubscribe(id);
  },
})