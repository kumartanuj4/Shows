import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { ShowService } from '../show.service';
import { SearchPipe } from '../search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit {   
  title = "Tv Shows";
  shows: Show[];
  // selectedShow: Show;

  constructor(private showService:  ShowService) { }

  ngOnInit() {
    this.getShows();
  }

  // onSelect(show: Show): void {
  //   this.selectedShow =show;
  // }

  getShows(): void {
    // this.shows = this.showService.getShows();
    this.showService.getShows()
      .subscribe(shows => this.shows = shows);
  }
  previousState() {
    window.history.back();
  }
}
