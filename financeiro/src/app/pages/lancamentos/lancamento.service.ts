import { Injectable } from '@angular/core';
import { LocalDB } from 'src/app/share/utils/localbase';

export interface DadosLancamentos {
  id: number,
  descricao: string,
  valor: number,
  dataMovimento: Date
}

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {
  private _db;
  private _tabela = 'lancamentos';

  constructor() {
    this._db = new LocalDB().getDB();
  }

  async getAll() {
    return await this._db.collection(this._tabela).get();
  }

  async add(item: any) {
    return await this._db.collection(this._tabela).add(item);
  }

  async remove(id: number) {
    return await this._db.collection(this._tabela).doc({ id: id }).delete();
  }

  async groupByDate() {
    return await this.getAll().then(itens => this.formatGroup(itens));
  }

  private async formatGroup(itens: any) {
    const result = {};
    itens.forEach( (it: DadosLancamentos) => {
      const data = it.dataMovimento.toISOString().split('T')[0];
      if (!result[data])  return result[data] = [it];
      return result[data].push(it);
    });
    return await result;
  }
}
