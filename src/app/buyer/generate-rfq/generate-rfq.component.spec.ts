import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRfqComponent } from './generate-rfq.component';

describe('GenerateRfqComponent', () => {
  let component: GenerateRfqComponent;
  let fixture: ComponentFixture<GenerateRfqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateRfqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
