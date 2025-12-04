import STS from "aws-sdk/clients/sts";

const client = new STS();

export const handler = async () => client.getCallerIdentity();
