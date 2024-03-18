import { Options } from '@angular-slider/ngx-slider/options';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService, Hotel } from 'src/app/api/api.service';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelsPageComponent implements OnInit {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  countries: string[] = [];
  stars: number[] = [5, 4, 3, 2, 1];
  selectedStars: number[] = [];
  selectedCountry: string = 'All country';

  priceRange: { min: number; max: number } = { min: 0, max: 1000 };
  selectedPriceRange: { min: number; max: number } = { min: 0, max: 1000 };
  priceRangeOptions: Options = {
    floor: 0,
    ceil: 1000,
    step: 10,
  };

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getHotels().subscribe((data) => {
      this.hotels = data;
      this.filteredHotels = [...this.hotels];
      this.setPriceRange();
      this.getCountries();
    });
  }

  getCountries() {
    this.countries = this.hotels
      .map((hotel) => hotel.country)
      .filter((country, i, self) => self.indexOf(country) === i);
  }

  setPriceRange() {
    // this.priceRange.min = Math.min(...this.hotels.map(hotel => hotel.price))
    // this.priceRange.max = Math.max(...this.hotels.map((hotel) => hotel.price));
    this.selectedPriceRange = { ...this.priceRange };
  }

  updatePriceRange(event: any) {
    // console.log(this.selectedPriceRange);
    // this.selectedPriceRange.min = event.value;
    // this.selectedPriceRange.max = event.highValue;
    this.filterHotels();
  }

  resetSettings() {
    this.selectedPriceRange.min = this.priceRange.min;
    this.selectedPriceRange.max = this.priceRange.max;
    this.selectedCountry = 'All country';
    this.selectedStars = [];
    this.filterHotels();
  }

  updateSelectedStars(star: number) {
    if (this.selectedStars.includes(star)) {
      this.selectedStars = this.selectedStars.filter((s) => s !== star);
    } else {
      this.selectedStars.push(star);
    }

    this.filterHotels();
  }

  filterHotels() {
    this.filteredHotels = this.hotels.filter((hotel) => {
      const matchesCountry =
        this.selectedCountry === 'All country' ||
        hotel.country === this.selectedCountry;
      const matchesStars = this.selectedStars.length
        ? this.selectedStars.includes(hotel.stars)
        : true;
      const matchesPrice =
        hotel.price >= this.selectedPriceRange.min &&
        hotel.price <= this.selectedPriceRange.max;
      return matchesStars && matchesPrice && matchesCountry;
    });
  }
}
