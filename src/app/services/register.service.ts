import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 private url = 'http://localhost:8080/user/add';
 private getUrl = 'http://localhost:8080/user/all';
 private users: MyUser[] = [];
 private user: MyUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
 };
 
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse): Observable<boolean> {
   console.error('get error: ' + error);
   if (error.error instanceof ErrorEvent) {
    console.error('an error occured:', error.error.message);
   } else {
    console.error(
     `Backend returned code ${error.status}, ` +
     `body was: ${error.error}`);
     }
     console.log(error);
     return of(false);
  }

 
  addUser(user: MyUser): Observable<boolean>  {
   
   const httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
   };

   return this.http.post<boolean>(this.url, user, httpOptions).pipe(
    catchError(this.handleError)
   );
 
  }
 
  getUsers(): Observable<MyUser[]> {
   return this.http.get<MyUser[]>(this.getUrl);
  }
}
