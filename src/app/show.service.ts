import { Injectable } from '@angular/core';
import { Show } from './show';
import { SHOWS } from './mock-shows';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ShowService {

  
  getShows(): Observable<Show[]> {
    return of (SHOWS);
  }

  getShow(id: number): Observable<Show> {
    return of(SHOWS.find(show => show.id === id));
  }

  constructor() { }

}
