import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {
    path: 'lancamentos',
    component: LancamentosComponent
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: '',
    redirectTo: 'lancamentos'
  }
];

@NgModule({
  declarations: [
    LancamentosComponent,
    TesteComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
