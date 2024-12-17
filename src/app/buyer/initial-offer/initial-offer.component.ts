import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
@Component({
  selector: 'app-initial-offer',
  standalone: true,
  imports: [NgIf, FormsModule, FileUploadModule],
  templateUrl: './initial-offer.component.html',
  styleUrl: './initial-offer.component.css',
  providers:[MessageService]
})
export class InitialOfferComponent {

  uploadedFile: any = null;
  isModalVisible = false;
  initialOfferDate: string = '';
  initialOfferAmount: string = '';
  reasonForRecommendation: string = '';
  isRecommend = false;
  finalOfferDate: string = '';
  finalOfferAmount: string = '';
  receivedOffer: { date: string; amount: string } | null = null;
  finalOffer: { date: string; amount: string } | null = null;
  isFinalOffer = false;

  constructor(private messageService: MessageService) {}
  onUpload(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded Successfully',
    });
  }
  submitReason() {
    if (this.reasonForRecommendation.trim() === '') {
      console.log('Reason for Recommendation is required.');
    } else {
      console.log('Reason for Recommendation:', this.reasonForRecommendation);
      this.reasonForRecommendation = '';
      this.isRecommend = true;

      this.closeReasonModal();
    }
  }

  reasonRecommendation() {
    this.isModalVisible = true;
    const modal = document.getElementById('reason');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.removeAttribute('aria-hidden');
    }
  }
  closeReasonModal() {
    this.isModalVisible = false;
    const modal = document.getElementById('reason');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }
  handleOffer() {
    this.isModalVisible = true;
    const modalId = this.isFinalOffer ? 'finalOfferModal' : 'initialOfferModal';
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.removeAttribute('aria-hidden');
    }
  }

  closeModal(modalId: string) {
    this.isModalVisible = false;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  submitInitialOffer() {
    this.receivedOffer = {
      date: this.initialOfferDate,
      amount: this.initialOfferAmount,
    };
    this.isFinalOffer = true;
    this.closeModal('initialOfferModal');
  }

  submitFinalOffer() {
    this.finalOffer = {
      date: this.finalOfferDate,
      amount: this.finalOfferAmount,
    };
    this.closeModal('finalOfferModal');
  }
}
