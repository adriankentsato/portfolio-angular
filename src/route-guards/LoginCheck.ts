import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";

export const LoginCheck: CanActivateFn = (route, state) => {
    // TODO : Checks here to verify of the browser has an active session
    return true ? true : inject(Router).createUrlTree(['dashboard']);
};
