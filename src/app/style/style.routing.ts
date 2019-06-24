// tslint:disable-next-line:eofline
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StyleComponent } from './style.component';
import {TotalComponent} from './total/total.component';

const route: Routes = [
    {
        path: '',
        component: StyleComponent,
        children: [
            {
                path: 'total',
                component: TotalComponent,
            },
            {
                path: '', redirectTo: 'total', pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],
})
export class StyleRoutingModule {}
