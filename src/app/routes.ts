import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ana Sayfa'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Ev Detayları'
  }
];

export default routeConfig;
