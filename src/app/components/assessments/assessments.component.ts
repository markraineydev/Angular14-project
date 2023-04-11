import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssessmentModel } from 'src/app/models/assessment.model';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
})
export class AssessmentsComponent implements OnInit {
  assessments: Observable<AssessmentModel[]> = new Observable<AssessmentModel[]>();
  currentStep: Observable<AssessmentModel> = new Observable<AssessmentModel>();

  constructor(private stepsService: AssessmentService) {}
  //@Input() steps = new Observable<AssessmentModel[]>();

  ngOnInit(): void {
    this.assessments = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: AssessmentModel) {
    this.stepsService.setCurrentStep(step);
  }
}
