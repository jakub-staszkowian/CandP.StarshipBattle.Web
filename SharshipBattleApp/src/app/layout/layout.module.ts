import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const COMPONENTS = [
    MainLayoutComponent
];

@NgModule({
    imports: [        
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