## Supported Mock Events
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
const ConfigChange = require('aws-mock-events').ConfigChange;
const ConfigPeriodic = require('aws-mock-events').ConfigPeriodic;

// modify the event to suite your tests
mockSNSEvent.Records[0].Sns.Message = 'testMessage';
```
