import {
  ChangeDetectionStrategy,
  Input,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() hotel: any;

  getStarsArray(num: number): any[] {
    return new Array(num);
  }

  ngOnInit(): void {}
}
