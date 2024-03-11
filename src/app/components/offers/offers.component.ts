import { ApiService } from './../../api/api.service';
import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent implements OnInit {
  hotels: any[] = [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getHotels().subscribe((data) => {
      this.hotels = data;
    });
  }
}
