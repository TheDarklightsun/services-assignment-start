import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../users-service.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private usersService: UsersServiceService) {
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.SetToInactive(id);
  }
}
