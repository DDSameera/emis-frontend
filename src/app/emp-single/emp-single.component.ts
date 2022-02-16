import {Component, OnInit} from '@angular/core';
import {RequestHandlerServiceService} from "../service/request-handler-service.service";

@Component({
  selector: 'app-emp-single',
  templateUrl: './emp-single.component.html',
  styleUrls: ['./emp-single.component.css']
})
export class EmpSingleComponent implements OnInit {

  constructor(private requestHandlerService: RequestHandlerServiceService) {
  }

  ngOnInit(): void {

  }




}
