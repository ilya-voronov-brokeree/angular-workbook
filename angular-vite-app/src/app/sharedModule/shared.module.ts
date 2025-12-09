import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RESOLUTION_TOKEN } from '../commonModule/resolution.token';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CountColorDirective } from './count-color.directive';
import { CountPluralPipe } from './count-plural.pipe';
import { SharedResolutionService } from './shared-resolution.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NavigationComponent, MainPanelComponent, NotFoundComponent],
  declarations: [CountColorDirective, CountPluralPipe],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NavigationComponent, MainPanelComponent, CountColorDirective, CountPluralPipe, NotFoundComponent],
  providers: [
    {
      provide: RESOLUTION_TOKEN,
      useClass: SharedResolutionService
    }
  ]
})
export class SharedModule {}


