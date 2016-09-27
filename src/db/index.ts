import * as dbConnection from './dbConnection';
import { Room } from './schema/Room';
import * as mongodb from 'mongodb';
import Promise = require('bluebird');

export class Db {
    private connection: mongodb.Db;

    constructor() {
      this.connection = dbConnection.getConnection();
    }

    public createRoom(room: Room, callback: (room: Room) => void) {
      this.connection.collection("Room").insertOne(room,null, new Promise<mongodb.InsertOneWriteOpResult>() )
    }


    public close() {
        this.connection.close();
    }
}
