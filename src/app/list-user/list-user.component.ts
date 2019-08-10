import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
        .subscribe(data=>{
          this.users = data;
          //console.log("Users data: ", this.users);
        })
  }


  deleteUser(user: User): void{
    this.userService.deleteUser(user.id)
        .subscribe(data => {
          this.users = this.users.filter(u => u !== user);
          //console.log("Filter us: ", user);
        })
  }

  editUser(user: User){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(["edit-user"])
  }

  addUser() : void{
    this.router.navigate(['add-user']);
  }

}
