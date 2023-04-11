import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentTemplateComponent } from './components/assessment-template/assessment-template.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AssessmentPageOneComponent } from './pages/assessment-page-one/assessment-page-one.component';
import { AssessmentPageTwoComponent } from './pages/assessment-page-two/assessment-page-two.component';
import { AssessmentPageThreeComponent } from './pages/assessment-page-three/assessment-page-three.component';
import { AssessmentPageFourComponent } from './pages/assessment-page-four/assessment-page-four.component';
import { AssessmentPageFiveComponent } from './pages/assessment-page-five/assessment-page-five.component';
import { AssessmentPageCompletedComponent } from './pages/assessment-page-completed/assessment-page-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentTemplateComponent,
    IntroPageComponent,
    AssessmentsComponent,
    HeaderComponent,
    FooterComponent,
    AssessmentPageOneComponent,
    AssessmentPageTwoComponent,
    AssessmentPageThreeComponent,
    AssessmentPageFourComponent,
    AssessmentPageFiveComponent,
    AssessmentPageCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
