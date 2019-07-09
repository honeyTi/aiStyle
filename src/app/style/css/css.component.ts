import { Component, OnInit } from '@angular/core';
import { MonacoFile } from 'ngx-monaco';
import BtnName from '../../../assets/js/btnNameList';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  files: MonacoFile = {
      uri: 'index.js',
      content: `console.log('hello world')`,
      language: 'javascript'
  };
  public classList: object;

  constructor() {
    this.classList = BtnName;
    console.log(this.classList);
  }

  ngOnInit() {
  }

}
