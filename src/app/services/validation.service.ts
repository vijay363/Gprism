import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  isEmpty(value: string | null): boolean {
    return !value || value.trim().length === 0;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  maxLength(value: string, length: number): boolean {
    return value.length <= length;
  }

 
  
}
