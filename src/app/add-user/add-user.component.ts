import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.addForm.invalid){
      return;
    }
    this.userService.createUser(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['list-user'])
        })
  }

}
