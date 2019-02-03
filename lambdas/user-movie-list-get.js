import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from '../libs/response-lib';

export async function handler(event, context) {

  console.log(event.queryStringParameters);

  const params = {
    TableName: 'MpUserMovie',

  // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':userId': defines 'userId' to be Identity Pool identity id
    //   of the authenticated user
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  }

  try {
    const result = await dynamoDbLib.query(params);
    return success(result.Items);
  } catch (e) {
    console.log(e)
    return failure({status: false});
  }

}