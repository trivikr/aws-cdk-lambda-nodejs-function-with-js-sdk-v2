import AWS from "aws-sdk";

const client = new AWS.DynamoDB();

export const handler = async () => client.listTables({});
