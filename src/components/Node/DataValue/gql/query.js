import gql from 'graphql-tag';


const query = gql`
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

  export default query