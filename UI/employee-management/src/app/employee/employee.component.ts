import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: string[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      data => this.handleSuccessfulResponse(data),
    );
  }

  handleSuccessfulResponse(data) {
    this.employees = data;
  }

}
