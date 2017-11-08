import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


 workflows= [
    {value: 'workflow1', viewValue: 'Work FLow 1'},
    {value: 'workflow', viewValue: 'Work Flow 2'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
