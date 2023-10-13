import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";

export const LandingPage: CanActivateFn = (route, state) => {
    return false ? true : inject(Router).createUrlTree(['dashboard']);
};
