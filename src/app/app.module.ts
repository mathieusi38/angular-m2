import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { Firestore, provideFirestore,getFirestore } from '@angular/fire/firestore';

import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDialogModule} from '@angular/material/dialog'; 


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './components/games/games.component';
import { HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RawgService } from './services/rawg.services';
import { DevelopersComponent } from './components/developers/developers.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentDialogComponent } from './components/comment-dialog/comment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    DevelopersComponent,
    GameInfoComponent,
    CommentsComponent,
    CommentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [RawgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
