import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleiveredComponent } from './deleivered.component';

describe('DeleiveredComponent', () => {
  let component: DeleiveredComponent;
  let fixture: ComponentFixture<DeleiveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleiveredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleiveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
