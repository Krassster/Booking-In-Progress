import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HotelPageComponent } from './pages/hotel/hotel-page/hotel-page.component';
import { HotelsPageComponent } from './pages/hotels/hotels-page/hotels-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'hotels', component: HotelsPageComponent },
      { path: 'hotel/:id', component: HotelPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
