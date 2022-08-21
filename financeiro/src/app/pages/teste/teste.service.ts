import { Injectable } from '@angular/core';
import { LocalDB } from 'src/app/share/utils/localbase';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private _db;
  private _tabela = 'teste';

  constructor() {
    this._db = new LocalDB().getDB();
  }

}
