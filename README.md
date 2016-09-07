
## Supported Mock Events:
 - SNS
 - S3 Put
 - DynamoDB

## Usage

```js

// other suggested mocks
const AWS = require('aws-sdk-mock');
const context = require('aws-lambda-mock-context');

// mocks from this module
const mockSNSEvent = require('aws-mock-events').SNS;
const mockDDBEvent = require('aws-mock-events').DynamoDB;
const mockS3PutEvent = require('aws-mock-events').S3Put;

// modify the event to suit your tests
mockSNSEvent.Records[0].Sns.Message = 'testMessage';
```
