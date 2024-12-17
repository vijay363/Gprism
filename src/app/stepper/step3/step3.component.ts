import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [NgIf],
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  @Output() proceed = new EventEmitter<void>();  
  @Input() isNfaAvailable: boolean | null = null; 
  @Output() nfaAvailable = new EventEmitter<boolean>();
  emitNfaAvailability(isAvailable: boolean) {
    this.nfaAvailable.emit(isAvailable);
  }

}
