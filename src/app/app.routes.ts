import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateIRNComponent } from './create-irn/create-irn.component';
import { StepperComponent } from './stepper/stepper/stepper.component';
import { Step1Component } from './stepper/step1/step1.component';
import { Step2Component } from './stepper/step2/step2.component';
import { Step3Component } from './stepper/step3/step3.component';
import { Step4Component } from './stepper/step4/step4.component';
import { MainComponent } from './main/main.component';
import { BuyerComponent } from './buyer/buyer/buyer.component';
import { GenerateRfqComponent } from './buyer/generate-rfq/generate-rfq.component';
import { ManApprovedComponent } from './buyer/man-approved/man-approved.component';
import { AdvanceToPayComponent } from './buyer/advance-to-pay/advance-to-pay.component';
import { ShipmentComponent } from './buyer/shipment/shipment.component';
import { DeleiveredComponent } from './buyer/deleivered/deleivered.component';
import { MaterialServiceComponent } from './buyer/material-service/material-service.component';
import { FinalPaymentComponent } from './buyer/final-payment/final-payment.component';
import { OrderclosedComponent } from './buyer/orderclosed/orderclosed.component';
import { PrAllocatedComponent } from './buyer/pr-allocated/pr-allocated.component';
import { PmcComponent } from './buyer/pmc/pmc.component';
import { InitialOfferComponent } from './buyer/initial-offer/initial-offer.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { hideHeader: true } },
  { path: 'create-irn', component: CreateIRNComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'step4', component: Step4Component },
  { path: 'generaterfq', component: GenerateRfqComponent },
  {
    path: 'buyer',
    component: BuyerComponent,
    children: [
      { path: '', redirectTo: 'prallocate', pathMatch: 'full' },  
      { path: 'initialoffer', component:InitialOfferComponent },
      { path: 'prallocate', component: PrAllocatedComponent },
      { path: 'manapproved', component: ManApprovedComponent },
      { path: 'pmc', component: PmcComponent },
      { path: 'advancetopay', component: AdvanceToPayComponent },
      { path: 'shipment', component: ShipmentComponent },
      { path: 'deliverd', component: DeleiveredComponent },
      { path: 'materialservice', component: MaterialServiceComponent },
      { path: 'finalpayment', component: FinalPaymentComponent },
      { path: 'orderclosed', component: OrderclosedComponent }
    ]
  },
  { path: 'main', component: MainComponent, data: { hideHeader: true } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
