import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import FormInput, { loginInputs } from '../../models/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputs: FormInput[] = loginInputs;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  login = async (formValue: FormGroup['value']) => {
    console.log("here")
    try {
      const response = await this.auth.login(formValue);
      console.log(response);
    } catch (error) {
    }
  }
}
