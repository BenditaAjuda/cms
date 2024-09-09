import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.usuario;
      const password = this.loginForm.value.senha;

      this.authService.login(email, password).subscribe({
        next: ({ user, token }) => {
          console.log('User:', user);
          console.log('Token:', token);
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.error('Login error:', error);
          // Handle login error, e.g., show error message
        }
      });
    }
  }

  sair() {
    this.authService.logout();
    console.log("Saiu");
  }

  recuperarSenha() {
   this.router.navigate(['recuperarConta']);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

}
