import { Component, OnInit, Output} from '@angular/core';
import { AuthService } from "../../services/auth";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private restService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    ) {}
    

    emailControl = this.fb.nonNullable.control<string>('', [
      Validators.required,
      Validators.email,
    ]);
  
    passwordControl = this.fb.nonNullable.control('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),
      Validators.minLength(8),
    ]);

    loginForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });

  ngOnInit(): void {

  }

  login() {
    this.restService.login(
       this.loginForm.getRawValue().email, 
       this.loginForm.getRawValue().password
       );

  }

}
