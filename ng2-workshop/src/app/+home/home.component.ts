import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared';
import { Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public team:TeamService) {
  }

  ngOnInit() {
    // called after services are available
    // see also ngAfterViewInit and ngAfterContentInit
  }

}
