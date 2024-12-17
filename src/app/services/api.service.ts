import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
}

interface Vendor {
  id: number;
  company: string;
}

interface Irn{
  id: number;
  irn: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';  // URL of json-server

  constructor(private http: HttpClient) { }

  // Get users by email
  getUserbyEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  // Get all vendors
  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(`${this.baseUrl}/vendors`);
  }
  getIrn(): Observable<Irn[]> {
    return this.http.get<Irn[]>(`${this.baseUrl}/irns`);
  }
}
