import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DebugUtils } from '../../share/utils/debug'
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit {

  constructor(private service: <%= classify(name) %>Service) {
  }

  ngOnInit(): void {
  }

}
