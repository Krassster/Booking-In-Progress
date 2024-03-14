import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

export interface Hotel {
  title: string;
  country: string;
  city: string;
  describe: string;
  rating: number;
  stars: number;
  review: number;
  img: string[];
  price: number;
  GPS: number[];
}

export const API: Hotel[] = [
  {
    title: 'Passalacqua',
    country: 'Itali',
    city: 'Moltrasio',
    describe:
      'A 24-room hotel in the 18th-century villa of composer Vincenzo Bellini. The Baroque-style building is surrounded by picturesque terraces. Nearby is a pool with a view of Lake Como. For guests, free events are held daily, from floristry classes to ice cream making workshops.',
    rating: 9.8,
    stars: 5,
    review: 64,
    img: [
      'assets/img/Passalacqua/0.jpg',
      'assets/img/Passalacqua/1.jpg',
      'assets/img/Passalacqua/2.jpg',
      'assets/img/Passalacqua/3.jpg',
      'assets/img/Passalacqua/4.jpg',
      'assets/img/Passalacqua/5.jpg',
    ],
    price: 980,
    GPS: [45.86050939752143, 9.099047324879093],
  },
  {
    title: 'Rosewood Hong Kong',
    country: 'Thailand',
    city: 'Hong Kong',
    describe:
      'A hotel in a 65-story skyscraper overlooking Victoria Harbour. It features 11 restaurants and lounges, a fitness center, and a pool. The interiors were designed by Taiwanese-origin designer Tony Chi, while the lobby and halls are adorned with works by contemporary artists, including those by British artists Henry Moore and Damien Hirst.',
    rating: 5,
    stars: 5,
    review: 641,
    img: [
      'assets/img/RoseWood/0.jpg',
      'assets/img/RoseWood/1.jpg',
      'assets/img/RoseWood/2.jpg',
      'assets/img/RoseWood/3.jpg',
      'assets/img/RoseWood/4.jpg',
      'assets/img/RoseWood/5.jpg',
    ],
    price: 870,
    GPS: [22.295224527656927, 114.1758963356279],
  },
  {
    title: 'Four Seasons Bangkok at Chao Phraya River',
    country: 'Thailand',
    city: 'BangKok',
    describe:
      "The hotel is located on the banks of Thailand's largest river, the Chao Phraya. Guests can enjoy a multi-level pool with city views, a spa center, and a green area for walks. The hotel's bar, BKK Social Club, ranks third in the best in Asia, and the Cantonese cuisine restaurant Yu Ting Yuan is Michelin-starred.",
    rating: 5,
    stars: 5,
    review: 475,
    img: [
      'assets/img/FourSeasons/0.jpg',
      'assets/img/FourSeasons/1.jpg',
      'assets/img/FourSeasons/2.jpg',
      'assets/img/FourSeasons/3.jpg',
      'assets/img/FourSeasons/4.jpg',
      'assets/img/FourSeasons/5.jpg',
    ],
    price: 595,
    GPS: [13.711966112027564, 100.51064104428873],
  },
  {
    title: 'SAii Laguna Phuket',
    country: 'Thailand',
    city: 'Phuket',
    describe:
      "SAii Laguna Phuket is located on Bangtao Beach. It offers rooms with a private balcony and free Wi-Fi. The resort is an outdoor pool and fitness center. A kid’s club and babysitting service are available. The property is a 20-minute drive to Patong Beach and Phuket International Airport. It is a 25-minute drive to Phuket Town. For Club, Suite and Villa room types, Club Lounge Access with VIP check-in, gourmet breakfast and afternoon snack, happy hour with beer and wine including chef's tasting menu is included.",
    rating: 8.7,
    stars: 5,
    review: 14,
    img: [
      'assets/img/SAiiLaguna/0.jpg',
      'assets/img/SAiiLaguna/1.jpg',
      'assets/img/SAiiLaguna/2.jpg',
      'assets/img/SAiiLaguna/3.jpg',
      'assets/img/SAiiLaguna/4.jpg',
      'assets/img/SAiiLaguna/5.jpg',
    ],
    price: 340,
    GPS: [13.711945265958029, 100.51063031517513],
  },
  {
    title: 'Gulf Court Business Bay',
    country: 'UAE',
    city: 'Dubai',
    describe:
      'Ideally situated within the Business Bay area, the Gulf Court Hotel Business Bay provides an unrivalled accommodation choice of 270 aesthetically designed rooms and suites, 6 restaurants, bars and lounges, private karaoke rooms, 5 meeting rooms and a range of hotel facilities for both business and leisure travellers seeking a refined experience.',
    rating: 8.3,
    stars: 4,
    review: 2,
    img: [
      'assets/img/GulfCourt/0.jpg',
      'assets/img/GulfCourt/1.jpg',
      'assets/img/GulfCourt/2.jpg',
      'assets/img/GulfCourt/3.jpg',
      'assets/img/GulfCourt/4.jpg',
      'assets/img/GulfCourt/5.jpg',
    ],
    price: 114,
    GPS: [25.182694592011956, 55.27543169746207],
  },
  {
    title: 'Saint Catherine Art Residence',
    country: 'Belgium',
    city: 'Brussels',
    describe:
      'Saint Catherine Art Residence in Brussels provides accommodations with free Wifi, a 11-minute walk from Belgian Comic Strip Center, 0.8 miles from Mont des Arts, and a 14-minute walk from Brussels Central Station. The property is around a 10-minute walk from Museum of the City of Brussels, 0.6 miles from Brussels City Hall, and a 10-minute walk from Grand Place. The property is a 4-minute walk from Place Sainte-Catherine and within half a mile of the city center.',
    rating: 8.3,
    stars: 4,
    review: 34,
    img: [
      'assets/img/SaintCatherine/0.jpg',
      'assets/img/SaintCatherine/1.jpg',
      'assets/img/SaintCatherine/2.jpg',
      'assets/img/SaintCatherine/3.jpg',
      'assets/img/SaintCatherine/4.jpg',
      'assets/img/SaintCatherine/5.jpg',
    ],
    price: 330,
    GPS: [50.85298594631253, 4.349148680903431],
  },
  {
    title: 'Roomley Moscow City',
    country: 'Russia',
    city: 'Moscow ',
    describe:
      'The Roomley Hotel in Moscow City is a space with character, where any traveler who wants to stay for a short or long time will feel at home. More about the rooms. Concept. Roomley is a space where tradition and innovation come together. Materials and design technologies are combined with the identity and character of the building.',
    rating: 8.4,
    stars: 4,
    review: 47,
    img: [
      'assets/img/RoomleyHotel/0.jpg',
      'assets/img/RoomleyHotel/1.jpg',
      'assets/img/RoomleyHotel/2.jpg',
      'assets/img/RoomleyHotel/3.jpg',
      'assets/img/RoomleyHotel/4.jpg',
      'assets/img/RoomleyHotel/5.jpg',
    ],
    price: 188,
    GPS: [55.74735327184491, 37.53911360861719],
  },
  {
    title: 'Aspera Hotel Golden Horn',
    country: 'Turkey',
    city: 'Istanbul',
    describe:
      'As Aspera Hotel Golden Horn, we offer an opportunity to easily access all of Istanbul from Sishane Square, one of the most valuable, dynamic and social locations of the present-day Istanbul, on Beyoğlu’s Golden Horn slope overlooking the historical peninsula. As for transport, the Metro Station is exactly in front of us, providing an easy access to socialization and shopping opportunities in different locations of the city.',
    rating: 8.8,
    stars: 4,
    review: 14,
    img: [
      'assets/img/GoldenHorn/0.jpg',
      'assets/img/GoldenHorn/1.jpg',
      'assets/img/GoldenHorn/2.jpg',
      'assets/img/GoldenHorn/3.jpg',
      'assets/img/GoldenHorn/4.jpg',
      'assets/img/GoldenHorn/5.jpg',
    ],
    price: 200,
    GPS: [41.028290721869354, 28.97200892151642],
  },
  {
    title: 'Cloister Inn',
    country: 'Czech Republic',
    city: 'Prague',
    describe:
      'The Cloister Inn Hotel offers accommodation in 51 spacious and air-conditioned rooms with an extra bed or baby cot upon request. All rooms are furnished with satellite television, telephone, Wi-Fi connection, small fridge, and safe deposit box. All rooms include an en-suite bathroom with a shower and toilet.',
    rating: 9.3,
    stars: 3,
    review: 34,
    img: [
      'assets/img/CloisterInn/0.jpg',
      'assets/img/CloisterInn/1.jpg',
      'assets/img/CloisterInn/2.jpg',
      'assets/img/CloisterInn/3.jpg',
      'assets/img/CloisterInn/4.jpg',
      'assets/img/CloisterInn/5.jpg',
    ],
    price: 170,
    GPS: [50.08338851537111, 14.41603713663493],
  },
  {
    title: 'The Calile Hotel',
    country: 'Australia',
    city: 'Brisbane',
    describe:
      'Great hotels have stories that go beyond providing a bed for the night – they offer moments of discovery, unexpected adventures, encounters to be savoured. ... Friends of Calile. Sign up to become a Friend of Calile and receive exclusive discounts and offers when you book direct. Learn more here. First Name.',
    rating: 9.6,
    stars: 5,
    review: 21,
    img: [
      'assets/img/TheCalile/0.jpg',
      'assets/img/TheCalile/1.jpg',
      'assets/img/TheCalile/2.jpg',
      'assets/img/TheCalile/3.jpg',
      'assets/img/TheCalile/4.jpg',
      'assets/img/TheCalile/5.jpg',
    ],
    price: 313,
    GPS: [-27.456416772636853, 153.04035580674702],
  },
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
