import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMsg = 'Erro desconhecido';

      if (err.error instanceof ErrorEvent) {
        // Erro de rede / cliente
        errorMsg = err.error.message;
      } else {
        let backendError: any = err.error;

        // Se for string, tenta converter para JSON
        if (typeof backendError === 'string') {
          try {
            backendError = JSON.parse(backendError);
          } catch {
            // se não for JSON válido, usa a string mesmo
            backendError = { message: backendError };
          }
        }

        // Se backend mandou mensagem estruturada
        if (backendError?.message) {
          if (backendError.validationErrors && backendError.validationErrors.length > 0) {
            errorMsg = `${backendError.message}: ${backendError.validationErrors[0]}`;
          } else {
            errorMsg = backendError.message;
          }
        } else {
          errorMsg = backendError;
        }
      }

      Swal.fire('Erro!', errorMsg, 'error');
      console.error('Erro interceptado:', err);

      return throwError(() => err);
    })
  );
};
