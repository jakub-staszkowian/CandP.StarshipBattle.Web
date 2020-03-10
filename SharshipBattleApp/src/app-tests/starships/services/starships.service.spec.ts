import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipsService } from 'src/app/starships/services/starships.service';
import { Starship } from 'src/app/starships/models/starship.model';
import { RouterService } from 'src/app/services/router.service';
import { StarshipsModule } from 'src/app/starships/starships.module';
import { UpsertStarshipModel } from 'src/app/starships/models/upsert-starship.model';

describe('StarshipsService', () => {

    let injector: TestBed;
    let service: StarshipsService;
    let httpMock: HttpTestingController;
    const apiUrl: string = 'http://localhost:53237/api/starships';
    
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
        });

        injector = getTestBed();
        service = injector.get(StarshipsService);
        httpMock = injector.get(HttpTestingController);
    });    

    afterEach(() => {
        httpMock.verify();
    });

    it('getAll() should send get request to API to retrieve starships collection', () => {

        const starshipsFromApi: Starship[] = [{ 
                id: 123,
                crewQuantity: 5,
                imageUrl: null,
                name: 'name1'
            } as Starship, { 
                id: 124,
                crewQuantity: 65,
                imageUrl: null,
                name: 'name2'
            } as Starship
        ];
        
        service.getAll()
            .then(response => {
                expect(response).toEqual(starshipsFromApi);
            });

        const req = httpMock.expectOne(apiUrl);
        req.flush(starshipsFromApi);

        expect(req.request.method).toBe('GET');
    });

    it('getRandom() should send get request to API to retrieve random starship', () => {

        const starshipFromApi: Starship = { 
            id: 123,
            crewQuantity: 5,
            imageUrl: null,
            name: 'name1'
        } as Starship;
        
        service.getRandom()
            .then(response => {
                expect(response).toEqual(starshipFromApi);
            });

        const req = httpMock.expectOne(`${apiUrl}/random`);
        req.flush(starshipFromApi);

        expect(req.request.method).toBe('GET');
    });

    it('getStarship() should send get request to API to retrieve starship by provided id', () => {

        const starshipFromApi: Starship = { 
            id: 123,
            crewQuantity: 5,
            imageUrl: null,
            name: 'name1'
        } as Starship;

        const starshipId: number = starshipFromApi.id;
        
        service.getStarship(starshipId)
            .then(response => {
                expect(response).toEqual(starshipFromApi);
            });

        const req = httpMock.expectOne(`${apiUrl}/${starshipId}`);
        req.flush(starshipFromApi);

        expect(req.request.method).toBe('GET');
    });

    it('add() should send post request to API to create starship', () => {

        const request: UpsertStarshipModel = new UpsertStarshipModel();
        request.crewQuantity = 5;
        request.imageUrl = null;
        request.name = 'name1';
        
        service.add(request);

        const req = httpMock.expectOne(apiUrl);
        req.flush(null);

        expect(req.request.method).toBe('POST');
    });

    it('edit() should send post request to API to create starship', () => {

        const starshipId: number = 123;
        const request: UpsertStarshipModel = new UpsertStarshipModel();
        request.crewQuantity = 5;
        request.imageUrl = null;
        request.name = 'name1';
        
        service.edit(starshipId, request);

        const req = httpMock.expectOne(`${apiUrl}/${starshipId}`);
        req.flush(null);

        expect(req.request.method).toBe('PUT');
    });

    it('delete() should send post request to API to create starship', () => {

        const starshipId: number = 123;
        
        service.delete(starshipId);

        const req = httpMock.expectOne(`${apiUrl}/${starshipId}`);
        req.flush(null);

        expect(req.request.method).toBe('DELETE');
    });
});