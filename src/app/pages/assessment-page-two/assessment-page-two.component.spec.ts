import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageTwoComponent } from './assessment-page-two.component';

describe('AssessmentPageTwoComponent', () => {
  let component: AssessmentPageTwoComponent;
  let fixture: ComponentFixture<AssessmentPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
