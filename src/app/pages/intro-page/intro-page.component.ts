import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssessmentModel } from 'src/app/models/assessment.model';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
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
    this.router.navigate(['/page-one']);
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }
}
