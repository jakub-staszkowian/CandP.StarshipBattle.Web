import { Starship } from '../models/starship.model';

export class StarshipResponse {
    id: number;
    name: string;
    imageUrl: string;
    crewQuantity: number;

    toStarship(): Starship {
        return { 
            id: this.id,
            name: this.name,
            imageUrl: this.imageUrl,
            crewQuantity: this.crewQuantity
        } as Starship;
    }
}