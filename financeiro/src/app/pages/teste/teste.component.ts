import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DebugUtils } from '../../share/utils/debug'
import { TesteService } from './teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  constructor(private service: TesteService) {
  }

  ngOnInit(): void {
  }

}
