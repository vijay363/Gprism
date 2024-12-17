import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManApprovedComponent } from './man-approved.component';

describe('ManApprovedComponent', () => {
  let component: ManApprovedComponent;
  let fixture: ComponentFixture<ManApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManApprovedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
