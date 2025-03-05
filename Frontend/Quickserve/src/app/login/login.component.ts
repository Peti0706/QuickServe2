import { Component } from '@angular/core';
import { VasarloAuthService } from '../SERVICES/vasarlo-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nev: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: VasarloAuthService, private router: Router){
  }
  login() {
    if (!this.nev || !this.password) {
      this.errorMessage = "Kérlek töltsd ki az összes mezőt!";
      return;
    }

    this.authService.login({ Nev: this.nev, Jelszo: this.password }).subscribe(
      (res: any) => {
        console.log("Bejelentkezési válasz:", res);
        localStorage.setItem('token', res.token);
        this.authService.triggerLoadVasarlo();
        
        this.router.navigate(['']);
      },
      err => {
        console.error("Hiba a bejelentkezésnél:", err);
        this.errorMessage = "Hibás email vagy jelszó!";
      }
    );
  }







}
