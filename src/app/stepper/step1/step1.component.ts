import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ValidationService } from '../../services/validation.service';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  standalone: true,
  imports: [FileUploadModule, ToastModule, HttpClientModule, FormsModule, NgIf],
  providers: [MessageService]
})
export class Step1Component {
  @Output() next = new EventEmitter<void>();
  @Output() updateIsNFA = new EventEmitter<boolean>();
  allocatedIRN: string = '';
  irnName: string = '';
  prNumber: string = '';

  constructor(private messageService: MessageService,private validationService: ValidationService) { }

  onUpload(event: any) {
    this.messageService.add({ 
      severity: 'info', 
      summary: 'Success', 
      detail: 'File Uploaded Successfully' 
    });
  }
   updateNFA(isNFA: boolean) {
    this.updateIsNFA.emit(isNFA);
  }
  validateForm(): boolean {
    if (this.allocatedIRN !== 'NFA') {
      if (this.validationService.isEmpty(this.irnName)) {
        alert('IRN Name is required.');
        return false;
      }

      if (this.validationService.isEmpty(this.prNumber)) {
        alert('PR Number is required.');
        return false;
      }
    }
    return true;
  }

  onNext() {

    if (this.validateForm()) {
      this.next.emit();
      console.log('Form is valid!');
    }
  }
  
}