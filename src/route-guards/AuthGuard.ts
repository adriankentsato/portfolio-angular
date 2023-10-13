import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {
  return true ? true : inject(Router).createUrlTree(['login']);
};

