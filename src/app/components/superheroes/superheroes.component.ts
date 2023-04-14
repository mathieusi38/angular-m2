import { Component, OnInit  } from '@angular/core';
import { AppService } from '../../app.services';
import { Observable } from 'rxjs';
import { Superheroes } from 'src/app/models/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  superheroes: Observable<Superheroes>;
  
  ngOnInit(): void {
    
  }

  constructor(private router: Router, private AppService: AppService) { 
    this.superheroes = this.AppService.getSuperHeroes();
  }

}
