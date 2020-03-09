import { Component } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'ngs-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

    username: string = '';

    constructor(private routerService: RouterService) {
    }

    startGame(): void {
        this.routerService.navigateToShowdownPage(this.username);
    }
}