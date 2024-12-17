import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderclosedComponent } from './orderclosed.component';

describe('OrderclosedComponent', () => {
  let component: OrderclosedComponent;
  let fixture: ComponentFixture<OrderclosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderclosedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
