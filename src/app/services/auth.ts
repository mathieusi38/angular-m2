import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    private http: HttpClient,
    private fireAuth: Auth,
    private router: Router
  ) {}

  login(email: string, password: string): Promise<void | UserCredential> {
    return signInWithEmailAndPassword(this.fireAuth, email, password).then(
      (response) => {
        if (response) {
          console.log('response', response);
          this.userData = response.user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log('erreur signInWithEmailAndPassword', error);
      }
    );
  }

  register(email: string, password: string): Promise<void | UserCredential> {
    return createUserWithEmailAndPassword(this.fireAuth, email, password).then(
      (response) => {
        if (response) {
          console.log('response', response);
          this.userData = response.user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log('erreur createUserWithEmailAndPassword', error);
      }
    );
  }

  logout() {
    signOut(this.fireAuth).then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['login']);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }
}