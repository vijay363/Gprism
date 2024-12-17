import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  steps = [
    { name: 'IRN Created', completed: true },
    { name: 'IRN Assigned', completed: true },
    { name: 'PR Allotted', completed: true },
    { name: 'PR RFQ', completed: false },
    { name: 'Under Technical Evaluation', completed: false },
    { name: 'MAN Initiated', completed: false },
    { name: 'MAN @MDO', completed: false },
    { name: 'MAN Approved', completed: false },
    { name: 'Adv TO Pay', completed: false },
    { name: 'Order Under Execution', completed: false },
    { name: 'Material / Services Delivered', completed: false },
    { name: 'Final Payment', completed: false },
    { name: 'Order Completed', completed: false }
  ];

  // Toggle the completed state of a step when clicked
  toggleStep(index: number) {
    this.steps[index].completed = !this.steps[index].completed;
  }

}
