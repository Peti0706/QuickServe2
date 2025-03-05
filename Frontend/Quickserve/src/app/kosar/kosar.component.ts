import { Component,OnInit } from '@angular/core';
import { KosarService } from '../SERVICES/kosar.service';
import { ProfilService } from '../SERVICES/profil.service';


@Component({
  selector: 'app-kosar',
  standalone: false,
  templateUrl: './kosar.component.html',
  styleUrl: './kosar.component.css'
})
export class KosarComponent implements OnInit {
  
  constructor(private kosarservice:KosarService,private profilService:ProfilService) { }

  public Kosar: any[] = [];
  Felhasznalo: any = {};

  loadProfil(): void {
    this.profilService.getvasarloinfo().subscribe(data => {
     
     this.Felhasznalo = data[0]; 
   
  });
  }

  ngOnInit() {
    // Feliratkozás a kosár tartalmának változásaira
    this.kosarservice.getCartItems().subscribe(items => {
      this.Kosar = items;
      console.log(items); // Frissítjük a kosár tartalmát
    });
    this.loadProfil(); 
  }

  decreaseQuantity(cikkszam: string) {
    this.kosarservice.decreaseQuantity(cikkszam);
  }

  increaseQuantity(cikkszam: string) {
    this.kosarservice.increaseQuantity(cikkszam);
  }

  removeItem(cikkszam: string) {
    this.kosarservice.removeItem(cikkszam);
  }

  getTotalPrice(): number {
    return this.kosarservice.getTotalPrice();
  }

  getNetPrice(): number {
    return this.kosarservice.getNetPrice();
  }

  getVatAmount(): number {
    return this.kosarservice.getVatAmount();
  }

}
