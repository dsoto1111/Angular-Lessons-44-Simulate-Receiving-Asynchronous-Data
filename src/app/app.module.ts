import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownDirective } from './dropdown.directive';
import { SetTopOffsetDirective } from './set-top-offset.directive';
import { AppRoutingModule } from './app-routing.module';
import { SecondPageModule } from './second-page/second-page.module';
import { FirstPageModule } from './first-page/first-page.module';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective,
    SetTopOffsetDirective,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FirstPageModule,     
    SecondPageModule,   
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
