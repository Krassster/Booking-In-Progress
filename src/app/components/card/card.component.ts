import {
  ChangeDetectionStrategy,
  Input,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() hotel: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getStarsArray(num: number): any[] {
    return new Array(num);
  }

  goToHotelPage(hotelId: string) {
    this.router.navigate(['/hotel', hotelId]);
  }
}
