import { CanActivateFn, RedirectCommand } from '@angular/router';
import { AuthUtil } from '../utils/auth.util';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let authUtil = inject(AuthUtil);

  if(authUtil.isUserAdmin == false) {
    alert("Você não tem permissão para acessar essa página");
    return new RedirectCommand(router.parseUrl('/inicio'), {
    skipLocationChange: false, 
    });
  }


  return true;
};

