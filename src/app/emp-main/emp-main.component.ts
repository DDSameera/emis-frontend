import {Component, OnInit} from '@angular/core';
import {RequestHandlerServiceService} from "../service/request-handler-service.service";

@Component({
  selector: 'app-emp-main',
  templateUrl: './emp-main.component.html',
  styleUrls: ['./emp-main.component.css']
})
export class EmpMainComponent implements OnInit {


  empData: any;


  //Employee
  firstName: any;
  lastName: any;
  dob: any;
  hireDate: any;
  gender: any;

  //Salary details
  amount: any;
  fromDate: any;
  toDate: any

  //Titles
  title: any;
  titleFromDate: any;
  titleToDate: any;


  constructor(private requestHandlerService: RequestHandlerServiceService) {
  }

  ngOnInit(): void {
    this.loadAllEmployees();
  }


  loadAllEmployees() {
    this.requestHandlerService.getRequest("employees").subscribe({
      'next': (resultData: any) => {
        this.empData = resultData.data;
        console.log(resultData);
      },
      'error': (errorData: any) => {
        console.log(errorData);
      }
    })
  }

  showMore(empData: any) {

    console.log(empData);
    this.firstName = empData.first_name;
    this.lastName = empData.last_name;
    this.dob = empData.birth_date;
    this.hireDate = empData.hire_date;
    this.gender = empData.gender;


    if (empData && empData.salary) {
      console.log(empData.salary)
      this.amount = empData.salary.salary;
      this.fromDate = empData.salary.from_date;
      this.toDate = empData.salary.to_date;
    }

    console.log(empData.title);
    if (empData && empData.title) {
      this.title = empData.title.title;
      this.titleFromDate = empData.title.from_date;
      this.titleToDate = empData.title.to_date;
    }
  }
}
