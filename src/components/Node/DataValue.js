import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import Update from './Update';


const MyNodeQuery = gql`
  query q($id: String!) { 
    uaNode(id: $id) { 
      id
      dataValue { 
        arrayType
        dataType
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
        }
      } 
    }
  }
`;

const _DataValue = ({ 
  id, 
  data: { 
    uaNode: {
      dataValue: {
        arrayType,
        dataType,
        value: {
          __typename,
          booleanValue,
          longValue,
          floatValue,
          intArrayValue,
          stringArrayValue
        }={}
      }={}
    }={}
  }})=>
  <div>
    <Update id={id} dataType={dataType} arrayType={arrayType}/>
    {__typename==="UaBoolean" && (booleanValue ? 'true' : 'false')}
    {__typename==="UaLong" && longValue}
    
    {__typename==="UaFloat" && floatValue}
    {__typename==="UaIntArray" && intArrayValue}
    {__typename==="UaStringArray" && stringArrayValue}

  </div>
const options = {
  shouldResubscribe: (props, nextProps) => {
    console.log('should', props, nextProps)
    return nextProps.id !== props.id
  }
}

const DataValue = compose(
  graphql(NODE_SUBSCRIPTION_QUERY, options),
  graphql(MyNodeQuery)
)(_DataValue)

export default DataValue;
