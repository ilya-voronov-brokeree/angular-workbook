import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NavigationComponent, MainPanelComponent],
  exports: [CommonModule, FormsModule, NavigationComponent, MainPanelComponent]
})
export class SharedModule {}


