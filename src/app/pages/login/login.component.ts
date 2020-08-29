import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import FormInput, { loginInputs } from '../../models/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputs: FormInput[] = loginInputs;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
  login = async (formValue: FormGroup['value']) => {
    try {
      const response = await this.usersService.login(formValue);
      console.log(response);
    } catch (error) {
    }
  }
}
