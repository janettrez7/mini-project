import { Component, OnInit } from '@angular/core';
import {MyService} from 'src/app/my-service.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  dataFromService: string ='hello';

  constructor(private myService: MyService, private router:Router) { }

  navigateToCompanies(){
    this.router.navigate(['/company']);
  }
  ngOnInit() {
    this.dataFromService = this.myService.getExcelData(); // Use the service's method
  }
}
  


