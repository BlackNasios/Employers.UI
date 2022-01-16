import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../models/api-models/employer.model';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private baseApiURL ='https://localhost:44338'

  constructor(private httpClient: HttpClient) { }

  getEmployers(): Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(this.baseApiURL + '/api/Employers')
  }

  getEmployer(employerId:string): Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(this.baseApiURL + '/api/Employers/' + employerId )
}


}
