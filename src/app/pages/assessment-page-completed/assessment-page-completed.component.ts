import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssessmentModel } from 'src/app/models/assessment.model';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessment-page-completed',
  templateUrl: './assessment-page-completed.component.html',
  styleUrls: ['./assessment-page-completed.component.scss']
})
export class AssessmentPageCompletedComponent implements OnInit {

  currentStep = <AssessmentModel>{};
  currentStepSub = <Subscription>{};

  constructor(private stepsService: AssessmentService, private router: Router) {}

  ngOnInit(): void {
    this.currentStepSub = this.stepsService
      .getCurrentStep()
      .subscribe((step: AssessmentModel) => {
        this.currentStep = step;
      });
  }

  onNextStep() {
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }

  onSubmit(): void {
  }
}
