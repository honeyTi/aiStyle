import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menu: Array<object>;
  constructor(private router: Router) {}
  // 点击事件
  changePage(data: any) {
    this.router.navigate([data.href]);
  }
  ngOnInit(): void {
    this.menu = [
      {name: '嵌入页面特效', href: 'style/total'},
      {name: 'hover样式获取', href: 'style/css'},
      // {name: 'hover样式获取', href: ''}
    ];
  }
}
