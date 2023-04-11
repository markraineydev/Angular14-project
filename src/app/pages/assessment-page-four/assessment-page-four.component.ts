import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssessmentModel } from 'src/app/models/assessment.model';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessment-page-four',
  templateUrl: './assessment-page-four.component.html',
  styleUrls: ['./assessment-page-four.component.scss']
})
export class AssessmentPageFourComponent implements OnInit {
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
    this.router.navigate(['/page-five']);
  }
  onPreviousStep() {
    this.router.navigate(['/page-three']);
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }

}
