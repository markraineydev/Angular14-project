import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { AssessmentPageOneComponent } from './pages/assessment-page-one/assessment-page-one.component';
import { AssessmentPageTwoComponent } from './pages/assessment-page-two/assessment-page-two.component';
import { AssessmentPageThreeComponent } from './pages/assessment-page-three/assessment-page-three.component';
import { AssessmentPageFourComponent } from './pages/assessment-page-four/assessment-page-four.component';
import { AssessmentPageFiveComponent } from './pages/assessment-page-five/assessment-page-five.component';
import { AssessmentPageCompletedComponent } from './pages/assessment-page-completed/assessment-page-completed.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroPageComponent,
  },
  {
    path: 'page-one',
    component: AssessmentPageOneComponent,
  },
  {
    path: 'page-two',
    component: AssessmentPageTwoComponent,
  },
  {
    path: 'page-three',
    component: AssessmentPageThreeComponent,
  },
  {
    path: 'page-four',
    component: AssessmentPageFourComponent,
  },
  {
    path: 'page-five',
    component: AssessmentPageFiveComponent,
  },
  {
    path: 'page-completed',
    component: AssessmentPageCompletedComponent,
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
