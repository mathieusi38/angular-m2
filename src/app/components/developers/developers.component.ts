import { Component, OnInit  } from '@angular/core';
import { RawgService } from '../../services/rawg.services';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { Games, Result } from 'src/app/models/interfaces';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent {
  games: Observable<Result[]>;
  console = console;
  readonly page = new BehaviorSubject<number>(0);
  type: string = 'developers';
  count: number = 0;
  per_page: number = 10;
  tableSize: number = 10;
  displayedColumns: string[] = ['name', 'games_count'];


  constructor(private router: Router, private RawgService: RawgService) { 
    this.games = combineLatest([this.page, this.type]).pipe(
      switchMap(([page, type]) => {
        return this.RawgService.getTopGames(this.type, page + 1, this.per_page).pipe(
          tap((data => {
            this.count = data.length;
          }))
        );
      })
    
    );

    // this.RawgService.getTopGames(this.type, page + 1, this.per_page)).tap((data) => {
    //   this.count = data.count;
    // }), 
    
  }

  onTableDataChange(event: PageEvent) {
    this.page.next(event.pageIndex);
  }

}
