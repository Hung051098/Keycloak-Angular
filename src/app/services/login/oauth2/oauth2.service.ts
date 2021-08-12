import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Oauth2 } from 'src/app/model/oauth2.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OAuth2LoginService {
  constructor(private http: HttpClient) {}

  // validateLoginDetails(oauth2: Oauth2) {
  //   window.sessionStorage.setItem("userdetails",JSON.stringify(oauth2));
  //   console.log("đến đây: "+  window.sessionStorage.getItem("userdetails"))
  //   return this.http.post("http://localhost:8180/auth/realms/keycloakspringboot/protocol/openid-connect/token", { observe: 'response',withCredentials: true });
  // }
  validateLoginDetails(oauth2: Oauth2) {
    window.sessionStorage.setItem('userdetails', JSON.stringify(oauth2));
    console.log('đến đây: ' + window.sessionStorage.getItem('userdetails'));
    var body =
      'client_id=sso_login_fontend?username=hung?password=123456?grant_type=password';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:8180/auth/realms/keycloakspringboot/protocol/openid-connect/token', body).subscribe(
      (data) => {
        alert('ok');
      },
      (error) => {
        console.log(JSON.stringify(error.json()));
      }
    );
  }
}
