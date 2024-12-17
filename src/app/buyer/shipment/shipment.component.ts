import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {
  constructor(private router:Router){}
  navigateToMaterialService(){
    this.router.navigate(['/buyer/materialservice'])
  }
}
