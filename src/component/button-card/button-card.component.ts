import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss']
})
export class ButtonCardComponent implements OnInit {
  @Input() name: string;
  @Input() count: number;
  @Input() hoverClass: string;
  @Input() themeType: string;

  constructor() { }

  ngOnInit() {
  }

}
