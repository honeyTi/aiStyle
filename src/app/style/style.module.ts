import { NgModule } from '@angular/core';
import { StyleRoutingModule } from './style.routing';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { StyleComponent } from './style.component';
import { TotalComponent } from './total/total.component';

import { IframeModule } from '../../component/iframe/iframe.module';
@NgModule({
    imports: [
        StyleRoutingModule,
        NgZorroAntdModule,
        IframeModule,
    ],
    declarations: [
        StyleComponent,
        TotalComponent,
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN }
    ],
    exports: [
        StyleComponent,
        TotalComponent
    ]
})
export class StyleModule {}
