import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageThreeComponent } from './assessment-page-three.component';

describe('AssessmentPageThreeComponent', () => {
  let component: AssessmentPageThreeComponent;
  let fixture: ComponentFixture<AssessmentPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
