import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      "id": 0,
      "name": "İnci Apartmanları",
      "city": "İstanbul",
      "state": "Marmara",
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": 'Evet',
      "laundry": 'Evet'
    },
    {
      "id": 1,
      "name": "Papatya Konakları",
      "city": "Ankara",
      "state": "İç Anadolu",
      "photo": "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": 'Hayır',
      "laundry": 'Evet'
    },
    {
      "id": 2,
      "name": "Denizgülü Residans",
      "city": "İzmir",
      "state": "Ege",
      "photo": "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits": 1,
      "wifi": 'Hayır',
      "laundry": 'Hayır'
    },
    {
      "id": 3,
      "name": "Bereket Apartmanları",
      "city": "İstanbul",
      "state": "Marmara",
      "photo": "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "availableUnits": 1,
      "wifi": 'Evet',
      "laundry": 'Hayır'
    },
    {
      "id": 4,
      "name": "Nar Emlak Plaza",
      "city": "Bursa",
      "state": "Marmara",
      "photo": "/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      "availableUnits": 1,
      "wifi": 'Evet',
      "laundry": 'Hayır'
    },
    {
      "id": 5,
      "name": "Turkuaz Yükseltiler",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      "availableUnits": 2,
      "wifi": 'Evet',
      "laundry": 'Evet'
    },
    {
      "id": 6,
      "name": "Güvenli Mahalle Sitesi",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      "availableUnits": 5,
      "wifi": 'Evet',
      "laundry": 'Evet'
    },
    {
      "id": 7,
      "name": "Umutlu Evler Kompleksi",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits": 2,
      "wifi": 'Evet',
      "laundry": 'Evet'
    },
    {
      "id": 8,
      "name": "Doğa Harikası Siteler",
      "city": "Antalya",
      "state": "Akdeniz",
      "photo": "/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": 'Hayır',
      "laundry": 'Hayır'
    },
    {
      "id": 9,
      "name": "Başkent Malikaneleri",
      "city": "İzmir",
      "state": "Ege",
      "photo": "/assets/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": 'Evet',
      "laundry": 'Evet'
    }
];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
