import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssessmentModel } from 'src/app/models/assessment.model';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessment-page-one',
  templateUrl: './assessment-page-one.component.html',
  styleUrls: ['./assessment-page-one.component.scss'],
})
export class AssessmentPageOneComponent implements OnInit {
  currentStepSub = <Subscription>{};
  currentStep = <AssessmentModel>{};

  constructor(
    private stepsService: AssessmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentStepSub = this.stepsService
      .getCurrentStep()
      .subscribe((step: AssessmentModel) => {
        this.currentStep = step;
      });
  }
  onNextStep() {
    this.router.navigate(['/page-two']);
  }
  onPreviousStep() {
    this.router.navigate(['/intro']);
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }
}
