import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageFiveComponent } from './assessment-page-five.component';

describe('AssessmentPageFiveComponent', () => {
  let component: AssessmentPageFiveComponent;
  let fixture: ComponentFixture<AssessmentPageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
