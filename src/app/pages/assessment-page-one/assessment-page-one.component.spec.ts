import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageOneComponent } from './assessment-page-one.component';

describe('AssessmentPageOneComponent', () => {
  let component: AssessmentPageOneComponent;
  let fixture: ComponentFixture<AssessmentPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
