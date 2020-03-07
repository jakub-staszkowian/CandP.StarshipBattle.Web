import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RouterService {

    constructor(private router: Router) {        
    }

    navigateToMainPage(): void {
        this.router.navigate(['']);
    }

    navigateToEditStarshipPage(starshipId: number): void {
        this.router.navigate(['starships', 'edit'], { 
            queryParams: { starshipId: starshipId}
        });
    }

    navigateToCreateStarshipPage(): void {
        this.router.navigate(['starships', 'create']);
    }

    navigateToStarshipsListPage(): void {
        this.router.navigate(['starships', 'list']);
    }

    navigateToScoreboardPage(): void {
        this.router.navigate(['scoreboard']);
    }

    navigateToStartGamePage(): void {
        this.router.navigate(['starships', 'start-game']);
    }

    navigateToShowdownPage(): void {
        this.router.navigate(['starships', 'showdown']);
    }
}