import { NgModule } from '@angular/core';
import { StarshipsRoutingModule } from './starships-routing.module';
import { CreateStarshipComponent } from './pages/create/create-starship.component';
import { StarshipsComponent } from './starships.component';
import { LayoutModule } from '../layout/layout.module';
import { StarshipsListComponent } from './pages/list/starships-list.component';
import { EditStarshipComponent } from './pages/edit/edit-starship.component';

const PAGES_COMPONENTS = [
    StarshipsComponent,
    CreateStarshipComponent,
    EditStarshipComponent,
    StarshipsListComponent
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