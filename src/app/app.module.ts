import { PostSubmitService } from './services/post-submit.service';
import { GeolocationService } from './services/geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule} from '@angular/service-worker';
import { environment} from '../environments/environment';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';


import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FABComponentComponent } from './fab-component/fab-component.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled:environment.production}),
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYmtxPSEUfHKEiKDCoeqcdvGPWp387Yzc'
    })
  ],
  providers: [ GeolocationService, PostSubmitService ],
  declarations: [ AppComponent, FABComponentComponent, PostFormComponent ],
  entryComponents: [ PostFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
