import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  [x: string]: any;
  username ?: string | null;
  token?: string;
  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private async initializeUserOptions(): Promise<void> {
    window.sessionStorage.setItem("username", this.keycloakService.getUsername());
    console.warn()
    const value = await this.keycloakService.getToken(); // lấy token từ trong function getToken() của KeycloakService
    this.token = value;
    this.username = window.sessionStorage.getItem('username') ;
  }
  
  logout()
  {
    this.keycloakService.logout();
    this.router.navigate(["home"])
  }

}
