import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialServiceComponent } from './material-service.component';

describe('MaterialServiceComponent', () => {
  let component: MaterialServiceComponent;
  let fixture: ComponentFixture<MaterialServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
