import { UpsertStarshipRequest } from '../requests/upsert-starship.request';

export class Starship {
    id: number;
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
}