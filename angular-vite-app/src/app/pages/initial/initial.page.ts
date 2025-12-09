import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESOLUTION_TOKEN } from '../../commonModule/resolution.token';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss']
})
export class InitialPageComponent {
  private readonly resolution = inject(RESOLUTION_TOKEN);
  readonly resolutionValue = this.resolution.getValue();
}


