import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AssessmentModel } from 'src/app/models/assessment.model';

@Component({
  selector: 'app-assessment-template',
  templateUrl: './assessment-template.component.html',
  styleUrls: ['./assessment-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AssessmentTemplateComponent implements OnInit {
  @Input()
  assessment: AssessmentModel;

  constructor() {
    this.assessment = { stepIndex: 0, isComplete: false };
  }

  ngOnInit(): void {}

  onCompleteStep() {
    this.assessment.isComplete = true;
  }
}
