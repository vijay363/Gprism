import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIRNComponent } from './create-irn.component';

describe('CreateIRNComponent', () => {
  let component: CreateIRNComponent;
  let fixture: ComponentFixture<CreateIRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIRNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
