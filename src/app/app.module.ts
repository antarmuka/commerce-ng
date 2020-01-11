import { Routes, RouterModule } from '@angular/router';
import { RentalModule } from './rental/rental.module';
import { HeaderComponent } from './common/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'rentals', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    RentalModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
