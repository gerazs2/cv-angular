import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componets/navbar/navbar.component';
import { HomeComponent } from './Componets/home/home.component';
import { FooterComponent } from './Componets/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurriculumComponent } from './Componets/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
