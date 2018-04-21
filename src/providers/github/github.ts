import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user.interface'; 
import { USER_LIST } from '../../mocks/user.mock';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {

  constructor() {
  }

  getUserMockData(username: string):Observable<User>{
    return Observable.of(USER_LIST.filter(user=>user.name===username)[0]);
  }

}
