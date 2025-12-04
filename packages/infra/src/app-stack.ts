import { Stack, StackProps, aws_lambda, aws_lambda_nodejs } from "aws-cdk-lib";
import { Construct } from "constructs";
import { join } from "node:path";

export class AwsCdkLambdaNodeJsFunctionWithSdkV2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaFnPath = join(__dirname, "..", "..", "lambdaFn");

    new aws_lambda_nodejs.NodejsFunction(this, "FunctionUsingBundleSdkV2", {
      description: "NodejsFunction uses bundled JS SDK v2",
      entry: join(lambdaFnPath, "index.mjs"),
      handler: "index.handler",
      runtime: aws_lambda.Runtime.NODEJS_24_X,
    });
  }
}
