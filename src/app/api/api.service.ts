import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

export const API = [
  {
    title: 'Passalacqua',
    country: 'Itali',
    describe:
      'A 24-room hotel in the 18th-century villa of composer Vincenzo Bellini. The Baroque-style building is surrounded by picturesque terraces. Nearby is a pool with a view of Lake Como. For guests, free events are held daily, from floristry classes to ice cream making workshops.',
    rating: 5,
    review: 345,
    img: 'assets/img/Passalacqua.jpg',
    price: 980,
  },
  // {
  //   title: 'Rosewood Hong Kong',
  //   country: 'Hong Kong',
  //   describe:
  //     'A hotel in a 65-story skyscraper overlooking Victoria Harbour. It features 11 restaurants and lounges, a fitness center, and a pool. The interiors were designed by Taiwanese-origin designer Tony Chi, while the lobby and halls are adorned with works by contemporary artists, including those by British artists Henry Moore and Damien Hirst.',
  //   rating: 5,
  //   review: 641,
  //   img: 'assets/img/Rosewood Hong Kong.jpg',
  //   price: 870,
  // },
  // {
  //   title: 'Four Seasons Bangkok at Chao Phraya River',
  //   country: 'Thailand',
  //   describe:
  //     "The hotel is located on the banks of Thailand's largest river, the Chao Phraya. Guests can enjoy a multi-level pool with city views, a spa center, and a green area for walks. The hotel's bar, BKK Social Club, ranks third in the best in Asia, and the Cantonese cuisine restaurant Yu Ting Yuan is Michelin-starred.",
  //   rating: 5,
  //   review: 475,
  //   img: 'assets/img/Four Seasons Bangkok at Chao Phraya River.jpg',
  //   price: 595,
  // },
];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getHotels(): Observable<any[]> {
    return of(API);
  }
}
