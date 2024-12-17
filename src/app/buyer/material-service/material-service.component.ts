import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-service',
  standalone: true,
  imports: [],
  templateUrl: './material-service.component.html',
  styleUrl: './material-service.component.css'
})
export class MaterialServiceComponent {
  constructor(private router: Router) {}
  navigateToFinalPayment(){
    this.router.navigate(['/buyer/finalpayment'])
  }
}
