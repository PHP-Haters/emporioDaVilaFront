import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  // Rotas que NÃO devem receber o token
  const noAuthRoutes = ['/auth/login', '/auth/register'];

  const isNoAuthRoute = noAuthRoutes.some(route => req.url.includes(route));

  if (isNoAuthRoute) {
    // não adiciona o token nessas rotas
    return next(req);
  }

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }

  return next(req);
};
