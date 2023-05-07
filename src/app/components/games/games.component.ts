import { Component, OnInit  } from '@angular/core';
import { RawgService } from '../../services/rawg.services';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { Games, Result } from 'src/app/models/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superheroes',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games: Observable<Result[]>;
  console = console;
  readonly page = new BehaviorSubject<number>(0);
  type: string = 'games';
  count: number = 0;
  per_page: number = 10;
  displayedColumns: string[] = ['name', 'released'];


  constructor(private router: Router, private RawgService: RawgService) { 
    this.games = this.RawgService.getTopGames(this.type, 1, this.per_page);

    
  }



}
