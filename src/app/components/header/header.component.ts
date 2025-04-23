import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { environment } from '@environments/environment';

const appTitle: string = environment.appTitle;
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  appTitle = computed(() => appTitle);
}
export default HeaderComponent;
