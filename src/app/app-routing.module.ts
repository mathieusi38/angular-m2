import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GamesComponent } from './components/games/games.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { CommentsComponent } from './components/comments/comments.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'login', component: LoginComponent  },  
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GamesComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'comments', component: CommentsComponent,  ...canActivate(redirectToLogin) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
