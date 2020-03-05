import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
    MainLayoutComponent,
    NavbarComponent
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MatToolbarModule     
    ],
    declarations: [
        COMPONENTS
    ],
    exports: [
        COMPONENTS
    ]
})
export class LayoutModule {
}