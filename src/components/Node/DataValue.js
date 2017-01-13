import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import Update from './Update';
import { Match } from 'react-router'
import { withState } from 'recompose'
import treeStyles from '../../styles/TreeStyles'


const MyNodeQuery = gql`
  query q($id: String!) { 
    uaNode(id: $id) { 
      id
      dataValue {
        statusCode {
          value
          description
        }
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
          ... on UaXmlElement  { xmlElementValue: value}
          ... on UaXmlElementArray  { xmlElementValueArray: value}

          ... on UaLocalizedText  { localizedTextValue: value { text }}
          ... on UaLocalizedTextArray  { localizedTextValueArray: value { text }}
          ... on UaQualifiedName  { qualifiedNameValue: value { name }}
          ... on UaQualifiedNameArray  { qualifiedNameValueArray: value { name }}

          ... on UaStatusCode  { statusCodeValue: value { name }}
          ... on UaStatusCodeArray  { statusCodeValueArray: value { name }}
          ... on UaNodeId  { nodeIdValue: value { identifierType value namespace namespaceUri serverIndex}}
          ... on UaNodeIdArray  { nodeIdValueArray: value { identifierType }}
          ... on UaExpandedNodeId  { expandedNodeIdValue: value { identifierType value namespace namespaceUri serverIndex}}
          ... on UaExpandedNodeIdArray  { expandedNodeIdValueArray: value { identifierType, }}

        }
      } 
    } 
  }`;

// eslint-disable-next-line no-unused-vars
const NODE_SUBSCRIPTION_QUERY = gql`
  subscription value ($id: String) {
    value(id: $id) {
      id, 
      dataValue {
        statusCode {
          value
          description
        }
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
          ... on UaLocalizedTextArray  { localizedTextValueArray: value { text }}
          ... on UaQualifiedName  { qualifiedNameValue: value { name }}
          ... on UaQualifiedNameArray  { qualifiedNameValueArray: value { name }}          
          ... on UaXmlElement  { xmlElementValue: value}
          ... on UaXmlElementArray  { xmlElementValueArray: value}
          ... on UaStatusCode  { statusCodeValue: value { name }}
          ... on UaStatusCodeArray  { statusCodeValueArray: value { name }}
          ... on UaNodeId  { nodeIdValue: value { identifierType value namespace namespaceUri serverIndex}}
          ... on UaNodeIdArray  { nodeIdValueArray: value { identifierType, }}
          ... on UaExpandedNodeId  { expandedNodeIdValue: value { identifierType value namespace namespaceUri serverIndex}}
          ... on UaExpandedNodeIdArray  { expandedNodeIdValueArray: value { identifierType, }}
        }
      } 
    }
  }
`;



const _DataValue = ({
  id, 
  data: { 
    loading,
    uaNode: {
      dataValue: {
        statusCode: {
          value,
          description
        }={},
        arrayType,
        dataType,
        value: dataValue
      }={}
    }={}
  } = {}}={})=> {
    const {
          __typename,
          booleanValue,
          longValue,
          floatValue,
          localizedTextValue,
          qualifiedNameValue,
          intValue,
          doubleValue,
          stringValue,
          intArrayValue,
          guidValue,
          stringArrayValue,
          xmlElementValue,
          statusCodeValue,
          dateValue,
          nodeIdValue,
          expandedNodeIdValue,
        }= dataValue || {}
  return <div style={treeStyles.value}>
      {!value && <div>
        <Match 
          pattern='edit'
          render={()=><Update 
            id={id} 
            dataType={dataType} 
            arrayType={arrayType}/>}
        />
        
        
          
          {__typename==="UaBoolean" && (booleanValue ? 'true' : 'false')}
          {__typename==="UaLong" && longValue}
          {__typename==="UaDouble" && doubleValue}
          {__typename==="UaInt" && intValue}
          {__typename==="UaString" && stringValue}
          {__typename==="UaFloat" && floatValue}
          {__typename==="UaIntArray" && intArrayValue}
          {__typename==="UaStringArray" && stringArrayValue}
          {__typename==="UaLocalizedText" && localizedTextValue && localizedTextValue.text}
          {__typename==="UaQualifiedName" && qualifiedNameValue.name}
          {__typename==="UaXmlElement" && xmlElementValue}
          {statusCodeValue && statusCodeValue.name}
          {dateValue}
          {JSON.stringify(nodeIdValue)}
          {JSON.stringify(expandedNodeIdValue)}
          {guidValue}
      </div>}
      {value>0 && <div style={{color: 'red'}}>
        {description}
      </div>}
    </div>
  }
  /*
  
*/
// eslint-disable-next-line no-unused-vars  
const options = {
  shouldResubscribe: (props, nextProps) => {
    console.log('should', props, nextProps)
    return nextProps.id !== props.id
  }
}


const DataValue = compose(
  graphql(NODE_SUBSCRIPTION_QUERY, options),
  graphql(MyNodeQuery),
  //withState('showForm', 'updateShowForm'),
)(_DataValue)

export default DataValue;
