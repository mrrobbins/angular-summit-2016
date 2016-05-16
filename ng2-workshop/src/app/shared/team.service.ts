import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  name = 'Chicago Cubs';
  people = [
    {name: 'Susan', id: Math.random()},
    {name: 'Anne', id: Math.random()},
    {name: 'John', id: Math.random()},
    {name: 'Mindy', id: Math.random()},
    {name: 'Ben', id: Math.random()},
    {name: 'Jordan', id: Math.random()},
    {name: 'Mike', id: Math.random()}
  ];
  constructor() {}

}
