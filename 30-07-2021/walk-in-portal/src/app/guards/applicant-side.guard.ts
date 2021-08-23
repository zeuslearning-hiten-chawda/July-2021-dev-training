import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FormServiceService } from '../services/form-service.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicantSideGuard implements CanActivate {
  constructor(
    private formService: FormServiceService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('from guard', this.formService.userId);
    if (this.formService.userId) {
      return true;
    }
    this.router.navigateByUrl('/login');
    console.log('guard default route called');
    return false;
  }
}
