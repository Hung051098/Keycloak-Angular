import { Component, OnInit } from '@angular/core';
import { Oauth2 } from 'src/app/model/oauth2.model';
import { OAuth2LoginService} from 'src/app/services/login/oauth2/oauth2.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  model = new Oauth2();

  constructor(private oauth2LoginService: OAuth2LoginService) { }

  ngOnInit(): void {
  }

}
