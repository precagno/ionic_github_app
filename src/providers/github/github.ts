import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { User } from '../../models/user.interface'; 
import { USER_LIST } from '../../mocks/user.mock';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mock';

@Injectable()
export class GithubProvider {

  private baseUrl: string='https://api.github.com/users';

  constructor(public http: HttpClient) {
  }

  getUserData(username: string):Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`).pipe(
      map((res:User)=>res)
    );
  }

  getUserMockData(username: string):Observable<User>{
    return Observable.of(USER_LIST.filter(user=>user.name===username)[0]);
  }

  getRepositoryMockData(username: string):Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repo=>repo.owner.name===username));
  }
}
