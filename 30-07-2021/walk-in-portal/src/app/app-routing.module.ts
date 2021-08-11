import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'register/personalInfomation', pathMatch: 'full', redirectTo: 'register/personalInformation' },
  // { path: 'register/qualifications', pathMatch: 'full', redirectTo: 'register/qualifications' },
  // { path: 'register/review', pathMatch: 'full', redirectTo: 'register/review' },
  // { path: 'register', pathMatch: 'full', redirectTo: 'register/personalInformation' },
  { path: 'register', pathMatch: 'full', redirectTo: 'register' },
  { path: 'walkin', pathMatch: 'full', redirectTo: 'walkin' },
  { path: 'walkin/success', pathMatch: 'full', redirectTo: 'walkin/success' },
  { path: 'walkin/:walkinID', pathMatch: 'full', redirectTo: 'walkin/:walkinID' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
