import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  @Input() title: string;
  @Input() id: string;
  @Input() src: string;
  @Input() themeType: string;
  public safeUrl: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

}
