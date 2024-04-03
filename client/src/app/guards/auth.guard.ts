import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(state.url, authService.isAuthenticated);

  if (!authService.isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
