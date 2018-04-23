import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user.interface'; 
import { USER_LIST } from '../../mocks/user.mock';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mock';

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

  getRepositoryMockData(username: string):Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repo=>repo.owner.name===username));
  }

}
