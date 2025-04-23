import { ChangeDetectionStrategy, Component } from '@angular/core';
import EducationComponent from '../education/education.component';
import ExperienceComponent from '../experience/experience.component';
import ProfileComponent from '../profile/profile.component';
import ProjectsComponent from '../projects/projects.component';

@Component({
  selector: 'app-content',
  imports: [
    ProfileComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
  ],
  templateUrl: './content.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
export default ContentComponent;
