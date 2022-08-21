import Localbase from 'localbase';

export class LocalDB {
    private _db: any;

    constructor() {
      this._db = new Localbase('db');
    }

    getDB() {
      return this._db;
    }
}
