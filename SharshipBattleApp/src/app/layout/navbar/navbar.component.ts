import { Component } from '@angular/core';

@Component({
    selector: 'ngx-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {
    public navigationTiles: any[] = [{
        text: 'Home',
        link: '/'
    },{
        text: 'Play a game',
        link: '/starships/start-game'
    },{
        text: 'View Starships',
        link: '/starships/list'
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