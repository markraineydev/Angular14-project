import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AssessmentModel } from '../models/assessment.model';


const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false }
];
@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  steps$: BehaviorSubject<AssessmentModel[]> = new BehaviorSubject<AssessmentModel[]>(STEPS);
  currentStep$: BehaviorSubject<AssessmentModel> = new BehaviorSubject<AssessmentModel>({stepIndex: 0, isComplete: false});

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: AssessmentModel): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<AssessmentModel> {
    return this.currentStep$.asObservable();
  }

  getSteps(): Observable<AssessmentModel[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
  
}
