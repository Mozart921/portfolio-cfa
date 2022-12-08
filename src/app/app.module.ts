import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { IonicComponent } from './pages/projet/ionic/ionic.component';
import { FlutterComponent } from './pages/projet/flutter/flutter.component';
import { AngularComponent } from './pages/projet/angular/angular.component';
import { Ionic2Component } from './pages/ionic2/ionic2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    ProjetComponent,
    IonicComponent,
    FlutterComponent,
    AngularComponent,
    Ionic2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
