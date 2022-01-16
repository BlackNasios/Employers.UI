import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employer } from '../models/ui-models/employer.model';
import { EmployerService } from './employer.service';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  employers: Employer[] =[];
  displayedColumns: string[] = ['firstName', 'lastName', 'position','edit'];
  dataSource: MatTableDataSource<Employer> = new MatTableDataSource<Employer>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private employerService:EmployerService) { }

  ngOnInit(): void {
    // Fetch Employers

    this.employerService.getEmployers()
    .subscribe(
      (successResponce) => {
         this.employers = successResponce;
         this.dataSource= new MatTableDataSource<Employer>(this.employers);
        //console.log(successResponce[0].firstName);

        if(this.matPaginator){
          this.dataSource.paginator= this.matPaginator;
        }

        if(this.matSort){
          this.dataSource.sort= this.matSort;
        }

      },
      (errorResponce) => {
        console.log(errorResponce);
      }


    );

  }

  filterEmployers(){

    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
