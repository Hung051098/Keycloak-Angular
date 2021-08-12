
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8180/auth',
          realm: 'keycloakspringboot',
          clientId: 'sso_login_fontend',
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
        },
        loadUserProfileAtStartUp: true
      });
  }