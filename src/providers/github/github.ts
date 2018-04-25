import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { User } from '../../models/user.interface'; 
import { USER_LIST } from '../../mocks/user.mock';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mock';

@Injectable()
export class GithubProvider {

  private baseUrl: string='https://api.github.com/users';

  constructor(public http: HttpClient) {
  }

  getUserData(username: string):Observable<any>{
    console.log(this.baseUrl);

    //return this.http.get(this.baseUrl);

    return null;
  }

  getUserMockData(username: string):Observable<User>{
    return Observable.of(USER_LIST.filter(user=>user.name===username)[0]);
  }

  getRepositoryMockData(username: string):Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repo=>repo.owner.name===username));
  }
}
