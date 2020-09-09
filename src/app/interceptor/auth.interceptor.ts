import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {map, switchMap, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return this.authService.newUser.pipe(
      take(1),
      map((token) => (
        !token
          ? req
          : req.clone({
            setHeaders: {
              // 'Content-Type': 'application/json; charset=utf-8',
              // Authorization: `Bearer ${token}`,
              // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Cache-Control,access_token',
            },
          })
      )),
      switchMap((request) => (
        next.handle(request)
      )),
    );
  }
}
