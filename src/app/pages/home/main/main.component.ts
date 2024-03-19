import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  selectedCountry?: string;
  priceMin?: number;
  priceMax?: number;
  selectedStars: boolean[] = [false, false, false, false, false];

  constructor(private routre: Router) {}

  search(): void {
    const stars = this.selectedStars
      .map((selected, i) => (selected ? i + 1 : null))
      .filter((star) => star !== null)
      .join(',');

    this.routre.navigate(['/hotels'], {
      queryParams: {
        country: this.selectedCountry,
        priceMin: this.priceMin,
        priceMax: this.priceMax,
        stars: stars,
      },
    });
  }
}
