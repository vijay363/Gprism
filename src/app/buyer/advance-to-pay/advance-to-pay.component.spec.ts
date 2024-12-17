import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceToPayComponent } from './advance-to-pay.component';

describe('AdvanceToPayComponent', () => {
  let component: AdvanceToPayComponent;
  let fixture: ComponentFixture<AdvanceToPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceToPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
