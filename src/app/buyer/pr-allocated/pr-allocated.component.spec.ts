import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrAllocatedComponent } from './pr-allocated.component';

describe('PrAllocatedComponent', () => {
  let component: PrAllocatedComponent;
  let fixture: ComponentFixture<PrAllocatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrAllocatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrAllocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
