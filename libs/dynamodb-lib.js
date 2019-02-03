import AWS from 'aws-sdk';


export function put(params) {
    return call('put', params);
}

export function query(params) {
    return call('query', params);
}

export function get(params) {
    return call('get', params);
}


export function call(action, params) {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    return dynamoDB[action](params).promise();                                         
}