import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga1 } from './models/Vagas.model';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) {}

  getVagas(): Observable<Vaga1[]>{
    return this._httpClient.get<Vaga1[]>(this.url);
  }

  cadastrarVaga(vaga: Vaga1):Observable<Vaga1[]>{
    return this._httpClient.post<Vaga1[]>(this.url,vaga);
  }

  atualizarVaga(id:any ,vaga: Vaga1):Observable<Vaga1[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Vaga1[]>(urlAtualizar,vaga);
  }

  removerVaga(id:any):Observable<Vaga1[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga1[]>(urlDeletar);
  }
}