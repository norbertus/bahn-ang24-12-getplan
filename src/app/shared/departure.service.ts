import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departuredataset } from './departuredataset';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DepartureService {
  // Base url
  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // POST
  CreateDeparture(data): Observable<Departuredataset> {
    return this.http
      .post<Departuredataset>(
        this.baseurl + '/testdepartures/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetDeparture(id): Observable<Departuredataset> {
    return this.http
      .get<Departuredataset>(this.baseurl + '/testdepartures/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetDepartures(): Observable<Departuredataset> {
    return this.http
      .get<Departuredataset>(this.baseurl + '/testdepartures/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

