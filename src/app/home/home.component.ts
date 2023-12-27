import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type=text placeholder="Şehre göre filtrele" />
      <button class="primary" type=button>Ara</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor= "let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      "id": 0,
      "name": "İnci Apartmanları",
      "city": "İstanbul",
      "state": "Marmara",
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 1,
      "name": "Papatya Konakları",
      "city": "Ankara",
      "state": "İç Anadolu",
      "photo": "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": false,
      "laundry": true
    },
    {
      "id": 2,
      "name": "Denizgülü Residans",
      "city": "İzmir",
      "state": "Ege",
      "photo": "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits": 1,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 3,
      "name": "Bereket Apartmanları",
      "city": "İstanbul",
      "state": "Marmara",
      "photo": "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 4,
      "name": "Nar Emlak Plaza",
      "city": "Bursa",
      "state": "Marmara",
      "photo": "/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 5,
      "name": "Turkuaz Yükseltiler",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 6,
      "name": "Güvenli Mahalle Sitesi",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      "availableUnits": 5,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 7,
      "name": "Umutlu Evler Kompleksi",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 8,
      "name": "Doğa Harikası Siteler",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 9,
      "name": "Başkent Malikaneleri",
      "city": "İzmir",
      "state": "Ege",
      "photo": "/assets/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true
    }
]

}
