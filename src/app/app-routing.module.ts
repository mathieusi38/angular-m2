import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GamesComponent } from './components/games/games.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  // { path: 'form', component: CodeFormComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GamesComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'games/:id', component: GameInfoComponent },
  { path: 'comments', component: CommentsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
