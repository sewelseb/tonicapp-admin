import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] = [];
  displayedColumns: string[] = ['id', 'email', 'school', 'courseSubject', 'teacher', 'authorizationForEmails'];

  constructor(private userService: UserService) {

    userService.getAll().subscribe( response =>{
        console.log(response.users);
        this.users = response.users;
    });
  }
}
