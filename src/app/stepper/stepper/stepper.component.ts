import { Component } from '@angular/core';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { Step4Component } from '../step4/step4.component';
import { NgClass, NgIf } from '@angular/common';
import { Step } from './enums';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [Step1Component, Step2Component, Step3Component, Step4Component, NgIf, NgClass],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  Step=Step;
  currentStep: number = Step.Step1;
  isNFA: boolean = false;
  isNfaAvailable: boolean | null = null; 
  totalSteps: number = 4;


updateIsNFA(isNFA: boolean) {
    this.isNFA = isNFA;
    this.isNfaAvailable=isNFA;
    this.totalSteps = isNFA ? Step.Step3 : Step.Step4;
  }

  nextStep() {
    if (this.isNFA) {
      if (this.currentStep === Step.Step1) {
        this.currentStep = Step.Step2;
      } else if (this.currentStep === Step.Step2) {
        this.currentStep = Step.Step3;
      }
    } else {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.isNFA) {
      if (this.currentStep === Step.Step2) {
        this.currentStep = Step.Step1;
      } else if (this.currentStep === Step.Step3) {
        this.currentStep = Step.Step2;
      }
    } else {
      this.currentStep--;
    }
  }

  

  updateNfaAvailability(isAvailable: boolean) {
    this.isNfaAvailable = isAvailable;

  }
  
  
}