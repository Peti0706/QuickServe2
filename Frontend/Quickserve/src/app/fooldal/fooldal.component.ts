import { Component,OnInit } from '@angular/core';
import { FooldalService, termekek } from '../SERVICES/fooldal.service';
import { KosarService } from '../SERVICES/kosar.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-fooldal',
  standalone: false,
  templateUrl: './fooldal.component.html',
  styleUrl: './fooldal.component.css'
})
export class FooldalComponent implements OnInit {

constructor(private FooldalService: FooldalService,private kosarservice:KosarService ) { }

public Termekek:any[]=[];
public showSuccessPopup: boolean = false;
kategoriak: string[] = [];
kedvencTermekek: any[] = [];


loadtermekek():void{
  this.FooldalService.getTermekek().subscribe(data => {
    this.Termekek = data;
    console.log(data);
    this.kategoriak = [...new Set(this.Termekek.map(termek => termek.Kategoria))];
  });
}

toggleKedvenc(termek: any) {
  if (this.isKedvenc(termek)) {
    this.FooldalService.removeKedvenc(termek.Cikkszam).subscribe({
      next: () => {
        this.kedvencTermekek = this.kedvencTermekek.filter(k => k.Cikkszam !== termek.Cikkszam);
      },
      error: (err) => console.error('Kedvenc eltávolítása sikertelen:', err)
    });
  } else {
    this.FooldalService.addKedvenc(termek.Cikkszam).subscribe({
      next: () => {
        this.kedvencTermekek.push(termek);
      },
      error: (err) => console.error('Kedvenc hozzáadása sikertelen:', err)
    });
  }
}

isKedvenc(termek: any): boolean {
  return this.kedvencTermekek.some(k => k.Cikkszam === termek.Cikkszam);
}

ngOnInit(): void {
  this.loadtermekek();
  this.loadKedvencek();
 
}
addToCart(termek: any) {
  this.kosarservice.addToCart(termek);
  console.log(termek);   // Hívjuk meg a CartService addToCart metódusát

  this.showSuccessPopup = true;
    // 1 másodperc múlva eltüntetjük
    setTimeout(() => {
      this.showSuccessPopup = false;
    }, 2000);
  }

  getTermekekByKategoria(kategoria: string): any[] {
    return this.Termekek.filter(termek => termek.Kategoria === kategoria);
  }

  loadKedvencek(): void {
    forkJoin({
      termekek: this.FooldalService.getTermekek(),
      kedvencek: this.FooldalService.getKedvencek()
    }).subscribe({
      next: ({ termekek, kedvencek }) => {
        this.Termekek = termekek;
        this.kategoriak = [...new Set(this.Termekek.map(termek => termek.Kategoria))];
        console.log('Kedvenc IDs:', kedvencek);
        console.log('Termekek:', this.Termekek);
        this.kedvencTermekek = this.Termekek.filter(termek => 
          kedvencek.includes(termek.Cikkszam) // Nem kell toString(), mert mindkettő int
        );
        console.log('KedvencTermekek:', this.kedvencTermekek);
      },
      error: (err) => {
        console.error('Hiba az inicializálás során:', err);
      }
    });
  }
  


}










