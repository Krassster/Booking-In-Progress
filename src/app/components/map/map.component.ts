import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map').setView([7.9967, 98.293], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    let marker = L.marker([7.9967, 98.293]).addTo(this.map);

    // let circle = L.circle([51.508, -0.11], {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5,
    //   radius: 500,
    // }).addTo(this.map);

    // let polygon = L.polygon([
    //   [51.509, -0.08],
    //   [51.503, -0.06],
    //   [51.51, -0.047],
    // ]).addTo(this.map);

    // marker.bindPopup('<b>Hello world!</b><br>I am a popup.');
    // circle.bindPopup('I am a circle.');
    // polygon.bindPopup('I am a polygon.');

    //   let popup = L.popup();

    //   const onMapClick = (e: { latlng: L.LatLngExpression }) => {
    //     popup
    //       .setLatLng(e.latlng)
    //       .setContent('You clicked the map at ' + e.latlng.toString())
    //       .openOn(this.map);
    //   };

    //   this.map.on('click', onMapClick);
  }

  ngOnInit(): void {
    this.initMap();
  }
}
