import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountriesResponse } from '../interfaces/countries-response/countries-response.interface';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly apiUrl = environment.apiCountries;

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<ICountriesResponse>(this.apiUrl).pipe(
      map((countries) => {
        return countries.data;
      })
    );
  }
}
