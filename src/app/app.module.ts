import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowService } from './show.service';
import { YoutubePipe } from './youtube.pipe';
// import { ShowSearchComponent } from './show-search/show-search.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    HomeComponent,
    ShowDetailsComponent,
    YoutubePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
