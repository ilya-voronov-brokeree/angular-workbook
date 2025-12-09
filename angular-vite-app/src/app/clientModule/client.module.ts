import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '../httpModule/http.module';
import { SharedModule } from '../sharedModule/shared.module';
import { ClientPageComponent } from './pages/client/client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPageComponent
  }
];

@NgModule({
  imports: [SharedModule, HttpModule, RouterModule.forChild(routes)],
  declarations: [ClientPageComponent]
})
export class ClientModule {}

