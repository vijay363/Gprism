import { Component } from '@angular/core';
import { StepsComponent } from "../steps/steps.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-buyer',
  standalone: true,
  imports: [StepsComponent, NgIf,RouterOutlet,CommonModule],
  templateUrl: './buyer.component.html',
  styleUrl: './buyer.component.css'
})
export class BuyerComponent {
  constructor(private router: Router) {}
  navigateToGeneraterfq() {
    this.router.navigate(['/generaterfq']); 
  }

 isModalVisible = false;
 showModal=false;
 value: Date = new Date();
 

 irnHold() {
   this.isModalVisible = true;
   const modal = document.getElementById('holdirnModal');
   if (modal) {
     modal.classList.add('show');
     modal.style.display = 'block';
     modal.removeAttribute('aria-hidden');
   }
 }
 
 irnCopy() {
   this.isModalVisible = true;
   const modal = document.getElementById('copyModal');
   if (modal) {
     modal.classList.add('show');
     modal.style.display = 'block';
     modal.removeAttribute('aria-hidden');
   }
 }
 closeModal() {
   this.isModalVisible = false;
   const modal = document.getElementById('holdirnModal');
   if (modal) {
     modal.classList.remove('show');
     modal.style.display = 'none';
     modal.setAttribute('aria-hidden', 'true');
   }
 }
 closeCopy() {
   this.isModalVisible = false;
   const modal = document.getElementById('copyModal');
   if (modal) {
     modal.classList.remove('show');
     modal.style.display = 'none';
     modal.setAttribute('aria-hidden', 'true');
   }
 }
}