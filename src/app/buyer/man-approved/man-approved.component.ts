import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-man-approved',
  standalone: true,
  imports: [],
  templateUrl: './man-approved.component.html',
  styleUrl: './man-approved.component.css'
})
export class ManApprovedComponent {
  constructor(private router: Router) {}
  navigateToPmc(){
    this.router.navigate(['/buyer/pmc']); 
  }

}
