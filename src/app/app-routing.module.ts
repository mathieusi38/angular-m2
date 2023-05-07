import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GamesComponent } from './components/games/games.component';
import { DevelopersComponent } from './components/developers/developers.component';

const routes: Routes = [
  // { path: 'form', component: CodeFormComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GamesComponent },
  { path: 'developers', component: DevelopersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
