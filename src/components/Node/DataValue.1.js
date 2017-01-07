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
          ... on UaNull {nullValue: value}
          ... on UaLong {longValue: value}
          ... on UaFloat {floatValue: value}
          ... on UaDouble {doubleValue: value}
          ... on UaInt {intValue: value}
          ... on UaDate {dateValue: value}
          ... on UaBoolean {booleanValue: value}
          ... on UaString {stringValue: value}
          ... on UaGuid {guidValue: value}
          ... on UaByteString {byteStringValue: value}
          ... on UaLongArray {longArrayValue: value}
          ... on UaFloatArray {floatArrayValue: value}
          ... on UaDoubleArray {doubleArrayValue: value}
          ... on UaIntArray {intArrayValue: value}
          ... on UaDateArray {dateArrayValue: value}
          ... on UaBooleanArray {booleanArrayValue: value}
          ... on UaStringArray {stringArrayValue: value}
          ... on UaGuidArray {guidArrayValue: value}
          ... on UaByteStringArray {byteStringArrayValue: value}
          ... on UaLocalizedText  { localizedTextValue: value { text }}
          ... on UaLocalizedTextArray  {localizedTextArrayValue: value { text }}
          
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
          ... on UaGuid {guidValue: value}
          ... on UaByteString {byteStringValue: value}
          ... on UaLongArray {longArrayValue: value}
          ... on UaFloatArray {floatArrayValue: value}
          ... on UaDoubleArray {doubleArrayValue: value}
          ... on UaIntArray {intArrayValue: value}
          ... on UaDateArray {dateArrayValue: value}
          ... on UaBooleanArray {booleanArrayValue: value}
          ... on UaStringArray {stringArrayValue: value}
          ... on UaGuidArray {guidArrayValue: value}
          ... on UaByteStringArray {byteStringArrayValue: value}
          ... on UaLocalizedText  { localizedTextValue: value { text }}
          ... on UaLocalizedTextArray  {localizedTextArrayValue: value { text }}
        }
      } 
    }
  }
`;

const _DataValue = ({ loading, id, data})=>
  <div> {id} {!loading && 'll'}
<div style = {{whiteSpace: 'pre'}}>
    {data.uaNode && JSON.stringify(data.uaNode.dataValue.value.localizedTextArrayValue, null, 2)}
  </div>
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
