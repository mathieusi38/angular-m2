import { Component, OnInit  } from '@angular/core';
import { RawgService } from '../../services/rawg.services';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { Games, Result } from 'src/app/models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {
  data: any;
  console = console;
  id: number = 0;

  constructor(private router: Router, private RawgService: RawgService, private route: ActivatedRoute) { 

    this.route.params.subscribe(
       params => {
        this.id = params['id'];
       }  
    );

    this.data = this.RawgService.getGameInfo(this.id);

  }

}
