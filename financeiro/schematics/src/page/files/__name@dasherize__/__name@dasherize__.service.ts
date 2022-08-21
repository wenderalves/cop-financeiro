import { Injectable } from '@angular/core';
import { LocalDB } from 'src/app/share/utils/localbase';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {
  private _db;
  private _tabela = '<%= dasherize(name) %>';

  constructor() {
    this._db = new LocalDB().getDB();
  }

}
