import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD_61dud1jGiV7ri8nl_t8__LGKf2us-9I",
      authDomain: "american-playbook.firebaseapp.com",
      projectId: "american-playbook",
      storageBucket: "american-playbook.appspot.com",
      messagingSenderId: "522206155310",
      appId: "1:522206155310:web:f8afaa851a5861d8a9c5bf",
      measurementId: "G-03ELRSXYGK"
  }),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
