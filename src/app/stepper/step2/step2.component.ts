import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FileUploadModule, ToastModule, HttpClientModule, CommonModule],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  providers: [MessageService],
})
export class Step2Component implements OnChanges {
  @Output() back = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() nfaAvailable = new EventEmitter<boolean>();

  isNfaRequired: boolean | null = null;
  isNfaAvailable: boolean | null = null;
  isModalVisible = false;
  showModal = false;
  showFileUpload = true;

  constructor(private messageService: MessageService,private validationService: ValidationService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isNfaAvailable)
  }

  setNfaRequired(required: boolean) {
    this.isNfaRequired = required;
    if (!required) {
      this.nfaAvailable.emit(true);
      this.showFileUpload = false; 
    } else {
      this.showFileUpload = true;
    }
  }

  setNfaAvailable(available: boolean) {
    this.isNfaAvailable = available;
    if (this.isNfaRequired && !available) {
      this.showModal = true; 
      this.isModalVisible = true;
    }
    this.nfaAvailable.emit(available);
  }

  closeModal() {
    this.showModal = false;
    this.isModalVisible = false;
  }

  hideFileUpload() {
    this.showFileUpload = false;
    this.closeModal();
  }

  onUpload(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded Successfully',
    });
  }

}
