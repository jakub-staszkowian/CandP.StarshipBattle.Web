import { NgModule } from '@angular/core';
import { MatInputModule, MatListModule, MatGridListModule } from '@angular/material';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { LayoutModule } from '../layout/layout.module';
import { StarshipsListComponent } from './pages/list/starships-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpsertStarshipComponent } from './pages/upsert/upsert-starship.component';
import { CommonModule } from '@angular/common';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { ShowdownComponent } from './pages/showdown/showdown.component';
import { ScoreComponent } from './pages/score/score.component';
import { PlayerCardComponent } from './pages/player-card/player-card.component';
import { DefaultImageDirective } from './directives/default-image.directive';

const PAGES_COMPONENTS = [
    StarshipsComponent,
    StarshipsListComponent,
    UpsertStarshipComponent,
    StartGameComponent,
    ShowdownComponent,
    ScoreComponent,
    PlayerCardComponent
];

const DIRECTIVES = [
    DefaultImageDirective
]

@NgModule({
    imports: [
        StarshipsRoutingModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
    ],
    declarations: [
        PAGES_COMPONENTS,
        DIRECTIVES
    ]
})
export class StarshipsModule {
}