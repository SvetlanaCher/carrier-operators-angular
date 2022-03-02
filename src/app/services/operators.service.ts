import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operators } from '../interfaces/operators.interface';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application-json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  private apiUrl = 'http://localhost:5000/operators';

  constructor(private http: HttpClient) { }

  getOperators(): Observable<Operators[]> {
    return this.http.get<Operators[]>(this.apiUrl);
  }
}
