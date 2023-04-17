import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    console.log(req.urlWithParams); // J'affiche l'url avec les params
    // Je passe la requête à la suite des interceptors cachés d'angular
    // Et je retourne ce résultat pour que la requête ait bien lieu
    return next.handle(req).pipe(
      tap(
        (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        (error) => (ok = 'failed')
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"${ok} in ${elapsed} ms.`;
        console.log(msg);
      })
    );
  }
}
