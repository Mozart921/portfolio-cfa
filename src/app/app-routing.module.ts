import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { Ionic2Component } from './pages/ionic2/ionic2.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AngularComponent } from './pages/projet/angular/angular.component';
import { FlutterComponent } from './pages/projet/flutter/flutter.component';
import { IonicComponent } from './pages/projet/ionic/ionic.component';
import { ProjetComponent } from './pages/projet/projet.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'projet',component:ProjetComponent},
  {path:'ionic',component:IonicComponent},
  {path:'flutter',component:FlutterComponent},
  {path:'angular',component:AngularComponent},
  {path:'ionic2',component:Ionic2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
