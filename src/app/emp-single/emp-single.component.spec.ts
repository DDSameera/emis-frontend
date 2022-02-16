import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSingleComponent } from './emp-single.component';

describe('EmpSingleComponent', () => {
  let component: EmpSingleComponent;
  let fixture: ComponentFixture<EmpSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
