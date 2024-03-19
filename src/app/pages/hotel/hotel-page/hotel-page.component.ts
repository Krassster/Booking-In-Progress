import { ApiService, Hotel } from 'src/app/service/api/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelPageComponent implements OnInit {
  hotelId!: number | null;
  hotelData: any;
  hotel?: Hotel;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.hotelId = +id;
        this.apiService.getHotelById(this.hotelId).subscribe((hotelData) => {
          this.hotel = hotelData;
        });
      }
    });
  }
}
