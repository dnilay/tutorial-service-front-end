import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tutorial} from "../models/tutorials";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {


  private baseUrl: string='http://localhost:9090/tutorials';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.baseUrl);
  }
}
