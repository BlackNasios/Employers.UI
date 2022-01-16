import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { Employer } from 'src/app/models/ui-models/employer.model';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-view-employer',
  templateUrl: './view-employer.component.html',
  styleUrls: ['./view-employer.component.css']
})
export class ViewEmployerComponent implements OnInit {
employerId: string | null | undefined;
// employer: Employer ={

//   id: 1,
//   lastName: "Giannakis",
//   firstName: "giorgos",
//   dateOfHire: new Date(),
//   dateOfBirth: new Date(),
//   annualSalary: 20000,
//   position: "2",
//   positionNavigation: empty


// }
  constructor(private readonly employerService: EmployerService,
     private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
this.route.paramMap.subscribe(
(params) =>{
 this.employerId = params.get('id');

 if(this.employerId){

  this.employerService.getEmployer(this.employerId)
  .subscribe(
    (successResponse)=>{
      console.log(successResponse)


    }


  );
 }
}

);




  }

}
