import mongodb = require('mongodb');
import Promise = require('bluebird');
import { config }  from "../config";

let myDb: any = null;

export function getConnection(): any {
    return new Promise((resolve: any, reject: any): any => {
        if (!myDb) {
    		mongodb.MongoClient.connect(config.db.connectionString, (error: any, db: mongodb.Db): void => {
                if (error) {
    				reject(error);
                } else {
                    myDb = {
                        db,
                        users: db.collection('Users'),
                    };
                    resolve(myDb);
                }
            });
    	} else {
            resolve(myDb);
        }
    });
}
