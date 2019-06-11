import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL = 'https://api-dev.sae.org/api/v1/authoring';
  SectionSelected = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getDocumentInfo( id: string ): Observable<any> {
    return this.http.get(
       this.BASE_URL + '/documents/' +
          id +
          '/latest'
    );
 }
}
