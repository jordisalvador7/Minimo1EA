import { Modelrole } from './../models/modelrole';
import { Environment } from './environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getRoles(): Observable<Modelrole[]> {
    return this.http.get<Modelrole[]>(this.environment.urlRoles + '/getRoles');
    }
}
