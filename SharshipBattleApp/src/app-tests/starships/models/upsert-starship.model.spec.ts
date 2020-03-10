import { UpsertStarshipModel } from "src/app/starships/models/upsert-starship.model";
import { UpsertStarshipRequest } from 'src/app/starships/requests/upsert-starship.request';
import { Starship } from 'src/app/starships/models/starship.model';

describe('UpsertStarship.model', () => {

    it('toUpsertStarshipRequest() should create UpsertStarshipRequest', () => {
        
        // arrange
        const model: UpsertStarshipModel = new UpsertStarshipModel();
        model.crewQuantity = 14;
        model.imageUrl = null;
        model.name = 'starship name';

        // act
        const result: UpsertStarshipRequest = model.toUpsertStarshipRequest();

        // assert
        expect(result).toBeDefined();
        expect(result.crewQuantity).toBe(model.crewQuantity);
        expect(result.imageUrl).toBe(model.imageUrl);
        expect(result.name).toBe(model.name);
    });

    it('create() should create UpsertStarshipModel', () => {
        
        // arrange
        const model: Starship = new Starship();
        model.id = 123;
        model.crewQuantity = 14;
        model.imageUrl = null;
        model.name = 'starship name';

        // act
        const result: UpsertStarshipRequest = UpsertStarshipModel.create(model);

        // assert
        expect(result).toBeDefined();
        expect(result.crewQuantity).toBe(model.crewQuantity);
        expect(result.imageUrl).toBe(model.imageUrl);
        expect(result.name).toBe(model.name);
    });
});