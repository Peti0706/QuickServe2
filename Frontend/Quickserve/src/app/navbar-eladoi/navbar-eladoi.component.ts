import { Component,OnInit } from '@angular/core';
import { VasarloAuthService } from '../SERVICES/vasarlo-auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar-eladoi',
  standalone: false,
  templateUrl: './navbar-eladoi.component.html',
  styleUrl: './navbar-eladoi.component.css'
})
export class NavbarEladoiComponent implements OnInit {

constructor(private VasarloAuthService:VasarloAuthService,private router: Router){}


isNavbarCollapsed = true;
vasarlo:string = "";
loadvasarlo():void{
const vasarlo = this.VasarloAuthService.getvasarlo();
if (vasarlo) {
  vasarlo.subscribe(
    (res: any) => {
      console.log("Sikeres válasz:", res);
      this.vasarlo = res;
    },
    err => {
      console.log("Hiba történt:", err);
      this.vasarlo = "Nincs bejelentkezve";
    }
  );
} else {
  console.log("Felhasználó nincs bejelentkezve (null érték).");
  this.vasarlo = "Nincs bejelentkezve";
}
}

isbejelentkezve(){
if (this.vasarlo=="Nincs bejelentkezve"){
this.router.navigate(['/bejelentkezes']);
}
else{
this.router.navigate(["/profil"]);
}
}

logout() {
this.VasarloAuthService.logout();
this.vasarlo = "Nincs bejelentkezve";
this.router.navigate(['/bejelentkezes']);
alert("Sikeres kijelentkezés!");

}

private subscription: Subscription;
ngOnInit(): void {

}



}
