import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationHeaderComponent } from './user-registration-header/user-registration-header.component';

const routes: Routes = [{ path: 'register', component: UserRegistrationHeaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRegistrationRoutingModule {}
