import { NgModule } from '@angular/core';
import { StarshipsRoutingModule } from './starships-routing.module';
import { CreateStarshipComponent } from './pages/create/create-starship.component';
import { StarshipsComponent } from './starships.component';
import { LayoutModule } from '../layout/layout.module';

const PAGES_COMPONENTS = [
    StarshipsComponent,
    CreateStarshipComponent
];

@NgModule({
    imports: [
        StarshipsRoutingModule,
        LayoutModule,
    ],
    declarations: [
        PAGES_COMPONENTS
    ]
})
export class StarshipsModule {
}