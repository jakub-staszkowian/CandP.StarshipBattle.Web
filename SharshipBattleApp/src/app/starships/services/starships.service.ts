import { Injectable } from '@angular/core';
import { Starship } from '../models/starship.model';
import { HttpClient } from '@angular/common/http';
import { UpsertStarshipModel } from '../models/upsert-starship.model';

@Injectable({
    providedIn: 'root'
})
export class StarshipsService {

    private starshipsEndpointUrl: string = 'http://localhost:53237/api/starships';

    constructor(private httpCilent: HttpClient) {        
    }

    getAll(): Promise<Starship[]> {
        return this.httpCilent
            .get<Starship[]>(this.starshipsEndpointUrl)
            .toPromise();
    }

    getRandom(): Promise<Starship> {
        const url = `${this.starshipsEndpointUrl}/random`;
        return this.httpCilent
            .get<Starship>(url)
            .toPromise();
    }

    getStarship(id: number): Promise<Starship> {
        const url = `${this.starshipsEndpointUrl}/${id.toString()}`;
        return this.httpCilent
            .get<Starship>(url)
            .toPromise();
    }

    add(starship: UpsertStarshipModel): Promise<void> {
        return this.httpCilent
            .post<void>(this.starshipsEndpointUrl, starship.toUpsertStarshipRequest())
            .toPromise();
    }

    edit(id: number, starship: UpsertStarshipModel): Promise<void> {
        const url = `${this.starshipsEndpointUrl}/${id.toString()}`;
        return this.httpCilent
            .put<void>(url, starship.toUpsertStarshipRequest())
            .toPromise();
    }

    delete(id: number): Promise<void> {
        const url = `${this.starshipsEndpointUrl}/${id.toString()}`;
        return this.httpCilent
            .delete<void>(url)
            .toPromise();
    }
}