import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DebugUtils } from '../../share/utils/debug'
import { DadosLancamentos, LancamentosService } from './lancamento.service';

interface DadosLancados {
  [key: string]: DadosLancamentos[]
}

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  lancamentos: DadosLancados = {};
  dados: DadosLancamentos[] = [];
  listaDatas: string[] = [];
  balanco: number = 0;
  entradas: number = 0;
  saidas: number = 0;

  lancamentoForm = new FormGroup({
    dataMovimento: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  hoje = new Date();
  constructor(private service: LancamentosService) {
  }

  ngOnInit(): void {
    this.atualizaLancamentos();
  }

  addLancamento() {
    let ultimo: number = this.dados[this.dados.length - 1]?.id;

    let dataMovimento = new Date(this.lancamentoForm.value.dataMovimento + 'T00:00:00');

    let lancamento: DadosLancamentos = {
      id: (ultimo) ? ultimo + 1 : 1,
      dataMovimento: dataMovimento,
      valor: Number(this.lancamentoForm.value.valor),
      descricao: this.lancamentoForm.value.descricao ?? ''
    }
    DebugUtils.logConsole(`Adicionou >>> ${JSON.stringify(lancamento)}`);
    this.service.add(lancamento).then(() => this.atualizaLancamentos());
  }

  async atualizaLancamentos() {
    this.lancamentos = {};
    this.lancamentoForm.reset();
    await this.service.getAll().then(async itens => await (this.dados = itens));
    await this.service.groupByDate().then(async itens => (this.lancamentos = itens));
    this.atualizarSaldos();
    this.listaDatas = Object.keys(this.lancamentos);
  }

  removeLancamento(id: number) {
    if (!confirm('Tem certeza que vai remover?')) return;
    DebugUtils.logConsole(`Excluiu >>> ${JSON.stringify(this.dados[id])}`);
    this.service.remove(id).then(() => this.atualizaLancamentos());
  }

  atualizarSaldos() {
    this.entradas = this.dados.reduce((pv, cur) => (cur.valor > 0) ? pv + cur.valor : pv, 0);
    this.saidas = Math.abs(this.dados.reduce((pv, cur) => (cur.valor < 0) ? pv + cur.valor : pv, 0));
    this.balanco = this.entradas - this.saidas;
  }

  verificaDia(dia: string) {
    let hojeDia = this.hoje.getDate();
    let dataRecebida = new Date(dia + 'T00:00:00');

    switch (hojeDia) {
      case dataRecebida.getDate() - 1:
        return 'Ontem';

      case dataRecebida.getDate() + 1:
        return 'Amanhã';

      case dataRecebida.getDate():
        return 'Hoje';
    }

    return dia.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$3/$2/$1');
  }

}
