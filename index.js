const DynamoDB = require('./events/DynamoDB.json');
const S3Put = require('./events/S3Put.json');
const SNS = require('./events/SNS.json');
const ConfigChange = require('./events/ConfigChange.json');
const ConfigPeriodic = require('./events/ConfigPeriodic.json');

module.exports = {
  DynamoDB: DynamoDB,
  S3Put: S3Put,
  SNS: SNS,
  ConfigChange: ConfigChange,
  ConfigPeriodic: ConfigPeriodic
};
