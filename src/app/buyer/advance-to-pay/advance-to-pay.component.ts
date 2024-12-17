import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance-to-pay',
  standalone: true,
  imports: [NgIf,FormsModule,NgFor],
  templateUrl: './advance-to-pay.component.html',
  styleUrl: './advance-to-pay.component.css'
})
export class AdvanceToPayComponent {
  isAdvanceRequired: string = '';
  cheque:string='';
  milestoneCount: number = 0; 
  milestones: number[] = []; 
  constructor(private router: Router) {}
  navigateToShipment(){
    this.router.navigate(['/buyer/shipment'])
  }
 

  generateCards(): void {
    if (this.milestoneCount >= 0 && this.milestoneCount <= 12) {
      this.milestones = Array(this.milestoneCount).fill(0); 
    } else {
      this.milestones = []; 
    }
  }
}
