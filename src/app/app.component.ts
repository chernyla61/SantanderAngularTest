import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPanelComponent } from './components/master-panel/master-panel.component';
import { DetailPanelComponent } from './components/detail-panel/detail-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, MasterPanelComponent, DetailPanelComponent]
})
export class AppComponent {
  title = 'SantanderAngularTest';
}
