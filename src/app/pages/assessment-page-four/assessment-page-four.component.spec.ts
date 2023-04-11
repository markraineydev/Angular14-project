import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageFourComponent } from './assessment-page-four.component';

describe('AssessmentPageFourComponent', () => {
  let component: AssessmentPageFourComponent;
  let fixture: ComponentFixture<AssessmentPageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
