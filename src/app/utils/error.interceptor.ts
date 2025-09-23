import { Injectable } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

// Interceptor no formato "function-based"
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMsg = 'Erro desconhecido';

      if (err.error instanceof ErrorEvent) {
        // Erro de rede ou do lado do cliente
        errorMsg = `Erro de rede: ${err.error.message}`;
      } else {
        // Erro do servidor
        errorMsg = `Erro ${err.status}: ${err.error?.message || err.message}`;
      }

      Swal.fire('Erro!', errorMsg, 'error');
      console.error('Erro interceptado:', err);

      return throwError(() => err);
    })
  );
};
