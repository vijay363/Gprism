import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-irn',
  standalone: true,
  imports: [],
  templateUrl: './create-irn.component.html',
  styleUrl: './create-irn.component.scss'
})
export class CreateIRNComponent {
  constructor(private router: Router) {}
  navigateToStepper() {
    this.router.navigate(['/stepper']); 
  }
}
