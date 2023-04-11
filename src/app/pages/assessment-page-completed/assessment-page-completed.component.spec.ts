import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageCompletedComponent } from './assessment-page-completed.component';

describe('AssessmentPageCompletedComponent', () => {
  let component: AssessmentPageCompletedComponent;
  let fixture: ComponentFixture<AssessmentPageCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPageCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
