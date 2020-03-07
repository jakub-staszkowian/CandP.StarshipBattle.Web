import { UpsertStarshipRequest } from '../requests/upsert-starship.request';
import { Starship } from './starship.model';

export class UpsertStarshipModel {
    name: string;
    imageUrl: string;
    crewQuantity: number;

    toUpsertStarshipRequest(): UpsertStarshipRequest {
        return {
            name: this.name,
            imageUrl: this.imageUrl,
            crewQuantity: this.crewQuantity
        } as UpsertStarshipRequest;
    }

    static create(starship: Starship): UpsertStarshipModel {
        const result: UpsertStarshipModel = new UpsertStarshipModel();
        result.name = starship.name;
        result.imageUrl = starship.imageUrl;
        result.crewQuantity = starship.crewQuantity;
        return result;
    }
}