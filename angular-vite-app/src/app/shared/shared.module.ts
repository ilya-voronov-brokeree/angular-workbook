import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationComponent, MainPanelComponent],
  exports: [NavigationComponent, MainPanelComponent]
})
export class SharedModule {}


