import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssessmentModel } from 'src/app/models/assessment.model';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessment-page-three',
  templateUrl: './assessment-page-three.component.html',
  styleUrls: ['./assessment-page-three.component.scss']
})
export class AssessmentPageThreeComponent implements OnInit {

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
    this.router.navigate(['/page-four']);
  }
  onPreviousStep() {
    this.router.navigate(['/page-two']);
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }

}
