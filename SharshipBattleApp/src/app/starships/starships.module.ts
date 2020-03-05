import { NgModule } from '@angular/core';
import { StarshipsRoutingModule } from './starships-routing.module';
import { CreateStarshipComponent } from './pages/create/create-starship.component';
import { StarshipsComponent } from './starships.component';

const PAGES_COMPONENTS = [
    StarshipsComponent,
    CreateStarshipComponent
];

@NgModule({
    imports: [
        StarshipsRoutingModule
    ],
    declarations: [
        PAGES_COMPONENTS
    ]
})
export class StarshipsModule {
}