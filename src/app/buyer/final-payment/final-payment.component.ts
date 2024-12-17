import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-payment',
  standalone: true,
  imports: [],
  templateUrl: './final-payment.component.html',
  styleUrl: './final-payment.component.css'
})
export class FinalPaymentComponent {
  constructor(private router:Router){}
  navigateToOrderClosed(){
    this.router.navigate(['/buyer/orderclosed'])
  }
}
