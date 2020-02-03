import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  async onSubmit(form) {
    try{
      const response = await this.auth.login(form.value);
      console.log(response);
    } catch(error){
    }
  }

}
