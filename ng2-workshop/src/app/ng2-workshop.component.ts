import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';

@Component({
  moduleId: module.id,
  selector: 'ng2-workshop-app',
  templateUrl: 'ng2-workshop.component.html',
  styleUrls: ['ng2-workshop.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/team', component: TeamComponent},
  {path: '/detail/:id', component: DetailComponent}
])
export class Ng2WorkshopAppComponent {
  title = 'ng2-workshop works!';
}
