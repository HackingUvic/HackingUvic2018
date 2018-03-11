import { GeolocationService } from './services/geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';


import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FABComponentComponent } from './fab-component/fab-component.component';
import { PostFormComponent } from './post-form/post-form.component';

// const routes: Routes = [
//   { path: '/', component: AppComponent,  canActivate: [AuthGuard] },
// ];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYmtxPSEUfHKEiKDCoeqcdvGPWp387Yzc'
    })
  ],
  providers: [ GeolocationService ],
  declarations: [ AppComponent, FABComponentComponent, PostFormComponent ],
  entryComponents: [ PostFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
