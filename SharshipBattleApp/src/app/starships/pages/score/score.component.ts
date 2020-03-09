import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

    @Input()username: string = '';
    @Input()userScore: number = 0;
}