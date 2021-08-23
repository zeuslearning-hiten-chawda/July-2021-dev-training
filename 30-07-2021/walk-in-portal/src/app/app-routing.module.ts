import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantSideGuard } from './guards/applicant-side.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  // { path: 'register/personalInfomation', pathMatch: 'full', redirectTo: 'register/personalInformation' },
  // { path: 'register/qualifications', pathMatch: 'full', redirectTo: 'register/qualifications' },
  // { path: 'register/review', pathMatch: 'full', redirectTo: 'register/review' },
  // { path: 'register', pathMatch: 'full', redirectTo: 'register/personalInformation' },

  //without routing
  // { path: 'register', pathMatch: 'full', redirectTo: 'register' },
  // { path: 'walkin', pathMatch: 'full', redirectTo: 'walkin' },
  // { path: 'walkin/success', pathMatch: 'full', redirectTo: 'walkin/success' },
  // { path: 'walkin/:walkinID', pathMatch: 'full', redirectTo: 'walkin/:walkinID' },

  //with routing
  {
    path: 'register',
    loadChildren: () =>
      import('./user-registration/user-registration.module').then(
        (m) => m.UserRegistrationModule
      ),
  },
  {
    path: 'walkin',
    loadChildren: () =>
      import('./applicant-side/applicant-side.module').then(
        (m) => m.ApplicantSideModule
      ),
    canActivate: [ApplicantSideGuard],
  },

  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ApplicantSideGuard],
})
export class AppRoutingModule {}
