import { Component } from '@angular/core';

@Component({
    selector: 'ngx-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {
    public navigationTiles: any[] = [{
        text: 'Play a game',
        link: '/home'
    },{
        text: 'View Starships',
        link: '/home'
    },
    {
        text: 'Add Starship',
        link: '/starships/create'
    },
    {
        text: 'Scoreboard',
        link: '/home'
    }];
}