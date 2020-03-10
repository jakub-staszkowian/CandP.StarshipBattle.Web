
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipsService } from 'src/app/starships/services/starships.service';
import { StarshipsListComponent } from 'src/app/starships/pages/list/starships-list.component';
import { Starship } from 'src/app/starships/models/starship.model';
import { RouterService } from 'src/app/services/router.service';
import { StarshipsModule } from 'src/app/starships/starships.module';
import { Router } from '@angular/router';

describe('StarshipsListComponent', () => {
    let fixture: ComponentFixture<StarshipsListComponent>;
    let app: StarshipsListComponent;
    let router: Router;
    
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
                StarshipsModule
            ],
            providers: [
                StarshipsService,
                RouterService,
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(StarshipsListComponent);
        app = fixture.componentInstance;
        router = TestBed.get(Router);
    });    


    it('viewDetails() should call router to move to edit page', () => {

        // arrange
        const starship: Starship = new Starship();
        starship.id = 123;
        const navigateSpy = spyOn(router, 'navigate');
        
        // act
        app.viewDetails(starship);

        // assert
        expect(navigateSpy).toHaveBeenCalledWith(['starships', 'edit'], { 
            queryParams: { starshipId: starship.id }
        });
    });
});