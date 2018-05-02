import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams,private github: GithubProvider) {
  }

  ionViewDidLoad() {
   this.username=this.navParams.get('username');
   
   this.github.getUserData(this.username).subscribe(data=>{
     this.user = data;
     this.logData(data);
   },error=>{
     this.logData(error);
   });

   this.github.getRepositoryInformation(this.username).subscribe(data=>{
     this.repositories=data;
   },error=>{
     this.logData(error)
   });

   /*this.github.getUserMockData(this.username).subscribe((data:User)=>{
      this.user=data;
   });
   this.github.getRepositoryMockData(this.username).subscribe((data:Repository[])=>{
      this.repositories=data;
   });*/
   
  }

  private logData(data:any):void{
    console.log(data);
  }
}
