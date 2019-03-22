import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {  }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // authorization header
        if (this.cookieService.get('Data')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${JSON.parse(this.cookieService.get('Data')).Token}`
                }
            });
        }

        return next.handle(request);
    }
}
