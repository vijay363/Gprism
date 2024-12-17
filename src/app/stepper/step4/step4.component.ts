import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';  
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [DialogModule, ButtonModule,ConfirmDialogModule,NgIf],  
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']  
})
export class Step4Component {
  isModalVisible = false;

  confirm() {
      this.isModalVisible = true;
      const modal = document.getElementById('confirmationModal');
      if (modal) {
          modal.classList.add('show');
          modal.style.display = 'block';
      }
  }

  closeModal() {
      this.isModalVisible = false;
      const modal = document.getElementById('confirmationModal');
      if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
      }
  }
}
