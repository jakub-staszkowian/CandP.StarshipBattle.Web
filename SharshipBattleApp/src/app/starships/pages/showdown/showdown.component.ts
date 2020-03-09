import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starship.model';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from '../../services/starships.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'ngs-showdown',
    templateUrl: './showdown.component.html',
    styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements OnInit {
    username: string = '';
    userScore: number = 0;
    cpuScore: number = 0;
    userStarship: Starship = new Starship();
    cpuStarship: Starship = new Starship();
    dataLoaded: boolean = false;
    showdownResult: string;

    constructor(private route: ActivatedRoute,
        private starshipsService: StarshipsService,
        private routerService: RouterService){
    }

    ngOnInit(): void {
        this.dataLoaded = false;
        this.route.queryParams
            .subscribe(params => {
                this.username = params.username as string;

                if (!this.username) {
                    this.routerService.navigateToStartGamePage();
                }
                
                this.loadStarships();
            });
    }

    restartGame(): void {
        this.dataLoaded = false;
        this.userStarship = new Starship();
        this.cpuStarship = new Starship();
        this.loadStarships();
    }

    private loadStarships(): void {
        const userStarshipPromise = this.starshipsService.getRandom()
        .then(starship => {
            this.userStarship = starship;
        })
        .catch(() => alert('Error occured, play a game later'));

        const cpuStarshipPromise = this.starshipsService.getRandom()
            .then(starship => {
                this.cpuStarship = starship;
            })
            .catch(() => alert('Error occured, play a game later'));

        Promise.all([userStarshipPromise, cpuStarshipPromise])
            .then(() => {
                this.dataLoaded = true;
                this.judgeShowdown();
    });
    }

    private judgeShowdown(): void {
        if (this.userStarship.crewQuantity === this.cpuStarship.crewQuantity) {
            this.showdownResult = 'Draw';
            return;
        }

        if (this.userStarship.crewQuantity > this.cpuStarship.crewQuantity) {
            this.showdownResult = `Winner: ${this.username}`;
            this.userScore++;
            return;
        }

        if (this.userStarship.crewQuantity < this.cpuStarship.crewQuantity) {
            this.showdownResult = 'Winner: CPU';
            this.cpuScore++;
            return;
        }
    }
}