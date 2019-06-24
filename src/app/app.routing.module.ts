import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
        { path: 'style', loadChildren: './style/style.module#StyleModule' },
        { path: '', redirectTo: 'style', pathMatch: 'full' },
        { path: '**', redirectTo: 'style' },
];

const config: ExtraOptions = {
        useHash: true,
};

@NgModule({
        imports: [RouterModule.forRoot(routes, config)],
        exports: [RouterModule],
})
export class AppRoutingModule {
}
