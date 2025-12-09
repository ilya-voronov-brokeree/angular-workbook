import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-forms-page',
  standalone: false,
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss']
})
export class FormsPageComponent {
  readonly activeTab = signal<'template' | 'reactive'>('template');

  setTab(tab: 'template' | 'reactive'): void {
    this.activeTab.set(tab);
  }
}

