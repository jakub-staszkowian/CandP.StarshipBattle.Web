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
        this.router.navigate(['starships', 'create', `${starshipId}`]);
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
}