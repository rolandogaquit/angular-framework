import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component'
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotographyComponent } from './photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
