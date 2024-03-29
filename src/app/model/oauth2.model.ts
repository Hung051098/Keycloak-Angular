export class Oauth2 {
    

    public access_token?: string;
    public expires_in?: number;
    public refresh_expires_in?: number;
    public refresh_token? : string;
    public token_type?: string;
    public session_state?: string;
    public scope? : string;
  
  
    constructor(access_token?: string, expires_in?: number, refresh_expires_in?: number, 
        refresh_token?: string, token_type?: string, session_state?: string, scope?:string){
            this.access_token = access_token;
            this.expires_in = expires_in;
            this.refresh_expires_in = refresh_expires_in;
            this.refresh_token = refresh_token;
            this.token_type = token_type;
            this.session_state = session_state;
            this.scope = scope;
    }
}

  