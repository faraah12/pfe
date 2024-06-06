import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";
import { UserProfile } from './user-profile';
@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _Keycloak: Keycloak | undefined;
  private  _profile : UserProfile | undefined;

  get Keycloak(){
    if(!this._Keycloak){
       this._Keycloak= new Keycloak ({
        url:'http://localhost:8080',
         realm:'sdia-realm',
         clientId:'sdia-marsamaroc'
      });
    }
    return this._Keycloak;
  }

  get profile() : UserProfile | undefined{
    return this._profile;
  }
  constructor() { }
  async init(){
    console.log("Authentication ......")
    const authenticated= await this.Keycloak?.init({
     onLoad:'login-required'
    });
    if(authenticated){
      this._profile=(await this.Keycloak?.loadUserProfile()) as UserProfile;
      this._profile.token=this.Keycloak?.token;

    }
  }

}