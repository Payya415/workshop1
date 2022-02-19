import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetest',
  templateUrl: './directivetest.component.html',
  styleUrls: ['./directivetest.component.css']
})
export class DirectivetestComponent implements OnInit {
  students = [
    {name:'Mickey',email:'mickey@uva.edu',major:'CS',year:'second'},
    {name:'Minney',email:'minney@uva.edu',major:'CS',year:'third'},
    {name:'duh',email:'duh@uva.edu',major:'SWE',year:'third'},
    {name:'huh',email:'huh@uva.edu',major:'SWE',year:'second'}
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
// this.students = [
//   {name:'Mickey',email:'mickey@uva.edu',major:'CS',year:'second'},
//   {name:'Minney',email:'minney@uva.edu',major:'CS',year:'third'},
//   {name:'duh',email:'duh@uva.edu',major:'SWE',year:'third'},
//   {name:'huh',email:'huh@uva.edu',major:'SWE',year:'second'},
// ]
