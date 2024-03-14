import { TruncatePipe } from './format.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './pages/home/main/main.component';
import { OffersComponent } from './pages/home/offers/offers.component';
import { MapComponent } from './components/map/map.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HotelsPageComponent } from './pages/hotels/hotels-page/hotels-page.component';
import { HotelPageComponent } from './pages/hotel/hotel-page/hotel-page.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OffersComponent,
    MapComponent,
    CardComponent,
    TruncatePipe,
    HomePageComponent,
    HotelsPageComponent,
    HotelPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
