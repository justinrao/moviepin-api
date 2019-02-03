import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from '../libs/response-lib';

export async function handler(event, context) {
  const data = JSON.parse(event.body);

  const { movieId, rating } = data;
  const userId = event.requestContext.identity.cognitoIdentityId;

  const params = {
    TableName: 'MpUserMovie',

    // 'Item' contains the attributes of the item to be created
    // - 'userId': user identities are federated through the
    //             Cognito Identity Pool, we will use the identity id
    //             as the user id of the authenticated user
    Item: {
      userId,
      movieId,
      rating,
      createdAt: Date.now()
    }
  }

  try {
    await dynamoDbLib.put(params);
    return success(params.Item);
  } catch (e) {
    console.log(e)
    return failure({status: false});
  }

}