import { Component, OnInit } from '@angular/core';
import { MonacoFile } from 'ngx-monaco';
import BtnName from '../../../assets/js/btnNameList';
import Swiper from 'swiper';

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
  swiper: Swiper;
  public active: number;

  constructor() {
    this.classList = BtnName;
  }

  hover(data: number) {
    this.active = data;
  }

  ngOnInit() {
    this.active = 0;
    this.swiper = new Swiper('.swiper-container',{
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    });
  }

}
