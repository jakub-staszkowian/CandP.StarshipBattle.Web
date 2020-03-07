import { Component } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'ngs-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

    constructor(private routerService: RouterService) {
        this.routerService.navigateToShowdownPage();
    }

}