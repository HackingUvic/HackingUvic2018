import { GeolocationService } from './services/geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYmtxPSEUfHKEiKDCoeqcdvGPWp387Yzc'
    })
  ],
  providers: [
    GeolocationService,
  ],
  declarations: [ AppComponent, CardComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
