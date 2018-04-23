import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShowsComponent } from '../shows/shows.component';
import { HomeComponent } from '../home/home.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';
// import { ShowSearchComponent } from '../show-search/show-search.component';

// import { ChildComponent } from '../child/child.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'detail/:id', component: ShowDetailsComponent }
  // { path: 'pipe', component: ShowSearchComponent }
  // { path: 'child', component: ChildComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
