import { Component } from '@angular/core';
import { UpsertStarshipModel } from '../../models/upsert-starship.model';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'ngx-upsert-starship',
    templateUrl: './upsert-starship.component.html',
    styleUrls: [ './upsert-starship.component.scss' ]
})
export class UpsertStarshipComponent {

    starship: UpsertStarshipModel = new UpsertStarshipModel();
    defaultImageUrl: string = 'assets/starship-default.jpg';
    displayedImage: string = this.defaultImageUrl;
    imageToShow: any;
    starshipId: number;

    constructor(private starshipsService: StarshipsService,
        private route: ActivatedRoute,
        private routerService: RouterService) {
            this.initPage();       
    }

    imageUrlChanged(): void {
        this.displayedImage = this.starship.imageUrl;
    }

    isStarshipValid(): boolean {
        return this.starship.crewQuantity > 0
            && this.starship.name.length > 0;
    }

    picNotLoaded(event: any): void {
        event.target.src = this.defaultImageUrl;
    }

    saveStarship(): void {
        if (this.isEditingStarship()) {
            this.starshipsService.edit(this.starshipId, this.starship)
                .then(() => alert('Starship saved successfully'))
                .catch(() => alert('Error occured, please try again later'));
        } else {
            this.starshipsService.add(this.starship)
                .then(() => alert('Starship saved successfully'))
                .catch(() => alert('Error occured, please try again later'));
        }        
    }

    isEditingStarship(): boolean {
        return this.starshipId !== undefined && this.starshipId !== null && this.starshipId >= 0;
      }

    private initPage() {
        this.route.queryParams
            .subscribe(params => {
                this.starshipId = params.starshipId as number;
                if (this.shouldRedirectToCreate()) {
                    this.redirectToCreatePage();
                }

                if (this.isEditingStarship()) {
                    this.starshipsService.getStarship(this.starshipId)
                        .then(starship => {
                            this.starship = UpsertStarshipModel.create(starship);
                            this.imageUrlChanged();
                        })
                        .catch(() => this.routerService.navigateToCreateStarshipPage());
                }
            })
    }

    private redirectToCreatePage() {
        this.routerService.navigateToCreateStarshipPage();
    }

    private shouldRedirectToCreate(): boolean {
        const isCreateWithStashipIdOpened = this.route.routeConfig.path.includes('create') && this.isEditingStarship();
        const isEditWithoutStashipIdOpened = this.route.routeConfig.path.includes('edit') && !this.isEditingStarship();
    
        return isCreateWithStashipIdOpened || isEditWithoutStashipIdOpened;
      }
}