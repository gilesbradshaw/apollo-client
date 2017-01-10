import gql from 'graphql-tag';

const mutation = gql`mutation updateNode($id: String, $value: ValueInput) {
  updateNode (
    id: $id
    value: $value
  ) {
    id
  }
}`;

export default mutation;