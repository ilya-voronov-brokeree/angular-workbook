import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { CountColorDirective } from './count-color.directive';
import { CountPluralPipe } from './count-plural.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NavigationComponent, MainPanelComponent],
  declarations: [CountColorDirective, CountPluralPipe],
  exports: [CommonModule, FormsModule, NavigationComponent, MainPanelComponent, CountColorDirective, CountPluralPipe]
})
export class SharedModule {}


