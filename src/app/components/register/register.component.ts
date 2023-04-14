import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
      Validators.minLength(8),
    ]);

    registerForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });

    register(): void {
      this.restService.register(
        this.registerForm.getRawValue().email,
        this.registerForm.getRawValue().password
      );

    }
    
}
