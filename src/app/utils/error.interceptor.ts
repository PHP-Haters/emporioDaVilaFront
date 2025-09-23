import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMsg = 'Erro desconhecido';

      // Erro de rede / cliente
      if (err.error instanceof ErrorEvent) {
        errorMsg = err.error.message;
      } 
      // Erro do backend (HTTP)
      else if (err.error && err.error.message) {
        // Aqui você pega a mensagem que vem do backend
        errorMsg = `${err.error.message}: ${err.error.validationErrors[0]}`;
      } 
      // Caso seja só texto
      else if (typeof err.error === 'string') {
        errorMsg = err.error;
      }

      Swal.fire('Erro!', errorMsg, 'error');
      console.error('Erro interceptado:', err);

      return throwError(() => err);
    })
  );
};
