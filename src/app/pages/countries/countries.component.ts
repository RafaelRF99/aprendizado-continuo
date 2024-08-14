import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  constructor(private countriesService: CountriesService) {
    this.countriesService.getAllCountries().subscribe((res) => {
      console.log(res);
    });
  }
}
