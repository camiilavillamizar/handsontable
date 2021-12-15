import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandsontableModel } from '../models/handsontable.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }
headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNVkgiLCJpYXQiOjE2Mzk1MDg3ODMsImV4cCI6MTYzOTUxNDE4M30.ZiVfo682Ca5Z_CqNjrfTAZPHw_ZlcuyaEinrluULfMtlLYv-Po372fd7s9KsioikNHPkXtr-tAFX9QfATQoNIQ"
    })
  getHandsontableData( id: number ) : Observable<HandsontableModel>{
    return this.http.get<HandsontableModel>("http://localhost:8080/api/v1/previsiones/handsontable/foto/"+id, {headers: this.headers});
  }

  getDetailHandsontable(idFotoList: number[], currency: string): Observable<HandsontableModel>{
    return this.http.post<HandsontableModel>(`http://localhost:8080/api/v1/previsiones/handsontable/detail/fotos/`+currency, idFotoList, {headers: this.headers});
  }

  getAnotherPage(){
    
  }


}
