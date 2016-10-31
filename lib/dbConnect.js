const MongoClient = require('mongodb');

const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/user_authorization_encilyricpedia';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
