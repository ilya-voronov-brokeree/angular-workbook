import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../sharedModule/shared.module';
import { FormsTodoTableComponent } from './components/forms-todo-table/forms-todo-table.component';
import { FormsPageComponent } from './pages/forms/forms.page';
import { ReactivePageComponent } from './pages/reactive/reactive.page';
import { TemplateDrivenPageComponent } from './pages/template-driven/template-driven.page';

const routes: Routes = [
  {
    path: '',
    component: FormsPageComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    FormsPageComponent,
    TemplateDrivenPageComponent,
    ReactivePageComponent,
    FormsTodoTableComponent
  ]
})
export class FormsModule {}

