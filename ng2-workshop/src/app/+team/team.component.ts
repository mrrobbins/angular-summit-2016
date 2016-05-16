import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TeamService, CardComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
  directives: [CardComponent, ROUTER_DIRECTIVES]
})
export class TeamComponent implements OnInit {
  onEdit(event) {
    this.router.navigate(['/detail', event.id]);
  }
  constructor(public team:TeamService, private router: Router) {}

  ngOnInit() {
  }

}
