import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017/owl';

let dataBase = null;

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('----------> mongodb fail, reason: ', err);
        process.exit(1);
    }

    dataBase = db;

    console.log('Connected to mongodb');

});

export default () => dataBase;