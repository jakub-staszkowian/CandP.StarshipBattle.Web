import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starship.model';
import { StarshipsService } from '../../services/starships.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'ngx-starships-list',
    templateUrl: './starships-list.component.html',
    styleUrls: [ './starships-list.component.scss' ]
})
export class StarshipsListComponent implements OnInit {
    
    starships: Starship[] = [];
    defaultImageUrl: string = 'assets/starship-default.jpg';

    constructor(private starshipsService: StarshipsService,
        private routerService: RouterService) {
    }

    ngOnInit(): void {
        this.starshipsService.getAll()
            .then(starships => {
                console.log(starships);
                this.starships = starships;
                console.log(this.starships);
            })
            .catch(() => {
                this.starships = [];
            });
    }

    picNotLoaded(event: any): void {
        event.target.src = this.defaultImageUrl;
    }

    viewDetails(starship: Starship) {
        this.routerService.navigateToEditStarshipPage(starship.id);
    }
}