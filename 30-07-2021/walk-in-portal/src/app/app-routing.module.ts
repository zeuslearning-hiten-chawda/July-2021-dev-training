import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
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
