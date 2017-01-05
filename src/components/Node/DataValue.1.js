import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const MyNodeQuery = gql`
  query q($id: String!) { 
    uaNode(id: $id) { 
      id
      dataValue { 
        value {
          __typename
          ... on UaQualifiedName  {value { name}}
          
        }
      } 
    } 
  }`;


const NODE_SUBSCRIPTION_QUERY = gql`
  subscription value ($id: String) {
    value(id: $id) {
      id, 
      dataValue {
        value {
          __typename
          ... on UaNull {nullValue: value}
          ... on UaLong {longValue: value}
          ... on UaFloat {floatValue: value}
          ... on UaDouble {doubleValue: value}
          ... on UaInt {intValue: value}
          ... on UaDate {dateValue: value}
          ... on UaBoolean {booleanValue: value}
          ... on UaString {stringValue: value}
          ... on UaQualifiedName  {qualifiedNameValue: value { name}}
          ... on UaLocalizedText {localizedTextValue: value {text}}
          ... on UaGuid {guidValue: value}
          ... on UaByteString {byteStringValue: value}
          ... on UaLongArray {longArrayValue: value}
          ... on UaFloatArray {floatArrayValue: value}
          ... on UaDoubleArray {doubleArrayValue: value}
          ... on UaIntArray {intArrayValue: value}
          ... on UaDateArray {dateArrayValue: value}
          ... on UaBooleanArray {booleanArrayValue: value}
          ... on UaStringArray {stringArrayValue: value}
          ... on UaQualifiedNameArray {qualifiedNameArrayValue: value {name}}
          ... on UaLocalizedTextArray {localizedTextArrayValue: value {text}}
          ... on UaGuidArray {guidArrayValue: value}
          ... on UaByteStringArray {byteStringArrayValue: value}
        }
      } 
    }
  }
`;

const _DataValue = ({ loading, id, data})=>
  <div>hhh {id} {!loading && 'll'}
    0{JSON.stringify(data)}-
  </div>
const options = {
  shouldResubscribe: (props, nextProps) => {
    console.log('should', props, nextProps)
    return nextProps.id !== props.id
  }
}

const DataValue = compose(
  //graphql(NODE_SUBSCRIPTION_QUERY, options),
  graphql(MyNodeQuery)
)(_DataValue)

export default DataValue;
