import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleRoutingModule } from './style.routing';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { MonacoEditorModule } from 'ngx-monaco';

import { StyleComponent } from './style.component';
import { TotalComponent } from './total/total.component';
import { CssComponent } from './css/css.component';

import { IframeModule } from '../../component/iframe/iframe.module';
import { ButtonCardModule } from '../../component/button-card/button-card.module';
@NgModule({
    imports: [
        StyleRoutingModule,
        NgZorroAntdModule,
        IframeModule,
        MonacoEditorModule.forRoot(),
        ButtonCardModule,
        CommonModule
    ],
    declarations: [
        StyleComponent,
        TotalComponent,
        CssComponent,
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN }
    ],
    exports: [
        StyleComponent,
        TotalComponent,
        CssComponent,
    ]
})
export class StyleModule {}
