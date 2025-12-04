#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AwsCdkLambdaNodeJsFunctionWithSdkV2Stack } from "./app-stack";

const app = new cdk.App();
new AwsCdkLambdaNodeJsFunctionWithSdkV2Stack(
  app,
  "AwsCdkLambdaNodeJsFunctionWithSdkV2"
);
