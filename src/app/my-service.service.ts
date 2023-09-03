// excel-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private excelDataUrl = 'C:/Users/rohit/mini-project/src/assets/companies.xlsx'; 

  constructor(private http: HttpClient) {}

  getExcelData(): any {
    return this.http.get(this.excelDataUrl, { responseType: 'blob' });
  }
}
