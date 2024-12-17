import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pmc',
  standalone: true,
  imports: [],
  templateUrl: './pmc.component.html',
  styleUrl: './pmc.component.css'
})
export class PmcComponent {
  constructor(private router: Router) {}
  navigateToAdvanceToPay(){
    this.router.navigate(['/buyer/advancetopay']); 
    console.log()
  }
  
}
