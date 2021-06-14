import { Component, OnInit } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-pipes-test-component',
  templateUrl: './pipes-test-component.component.html',
  styleUrls: ['./pipes-test-component.component.css']
})
export class PipesTestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  str = "Hello, world";
  num = 0.141516;
  date = new Date(2021, 6, 14);

}
