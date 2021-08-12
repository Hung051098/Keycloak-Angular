import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Oauth2 } from 'src/app/model/oauth2.model';
import { OAuth2LoginService } from 'src/app/services/login/oauth2/oauth2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Oauth2();

  constructor(private oauth2LoginService: OAuth2LoginService) { }

  ngOnInit(): void {
  }

  login (){
    this.oauth2LoginService.validateLoginDetails(this.model)/*.subscribe(
      responseData => {
        this.model = <any> responseData.body;
        // window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
      }, error => {
        console.log(error);
      });*/
  }
}
