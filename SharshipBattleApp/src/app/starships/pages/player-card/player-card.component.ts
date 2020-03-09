import { Component, Input } from '@angular/core';
import { Starship } from '../../models/starship.model';

@Component({
    selector: 'ngx-player-card',
    templateUrl: './player-card.component.html',
    styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
    @Input()starship: Starship = new Starship();
}