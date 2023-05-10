import { Component, OnInit  } from '@angular/core';
import { RawgService } from '../../services/rawg.services';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { Games, Result } from 'src/app/models/interfaces';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-superheroes',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games: any;
  console = console;
  readonly page = new BehaviorSubject<number>(0);
  type: string = 'games';
  ordering: string = '-suggestions_count';
  count: number = 0;
  per_page: number = 10;
  tableSize: number = 10;
  displayedColumns: string[] = ['details','name', 'released', 'rating', 'ratingCount'];


  constructor(private router: Router, private RawgService: RawgService) { 
    //this.games = this.RawgService.getTopGames(this.type, 1, this.per_page);

    this.games = combineLatest([this.page, this.type]).pipe(
      switchMap(([page, type]) => {
        return this.RawgService.getRawgData(this.type, page + 1, this.per_page, this.ordering).pipe(
          tap((data => {
            this.count = data.count
          })),
          map((r) => r.results)
        );
      })
    
    );

    
  }


  onTableDataChange(event: PageEvent) {
    this.page.next(event.pageIndex);
  }

}
