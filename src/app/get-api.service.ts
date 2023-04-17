import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class GetApiService {

constructor(private http: HttpClient) { }

getData(): Observable<any> {
  const randomId = Math.floor(Math.random() * 100) + 1;
  const url = `https://jsonplaceholder.typicode.com/todos/${randomId}`;
  return this.http.get(url);
  
}
}