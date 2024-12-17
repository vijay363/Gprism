import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pr-allocated',
  standalone: true,
  imports: [],
  templateUrl: './pr-allocated.component.html',
  styleUrl: './pr-allocated.component.css'
})
export class PrAllocatedComponent {
  constructor(private router: Router) {}
  navigateToManapproved() {
    this.router.navigate(['/buyer/manapproved']); 
  }
}
